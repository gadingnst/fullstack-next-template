'use client';

import React, { Component, ComponentType, RefObject } from 'react';

import { LazyLoadImageDelayedMethod } from '@/packages/libs/LazyLoadImage/components/interface';
import getScrollAncestor from '@/packages/libs/LazyLoadImage/utils/getScrollAncestor';
import { isIntersectionObserverAvailable } from '@/packages/libs/LazyLoadImage/utils/intersectionObserver';

interface ScrollPosition {
  x: number;
  y: number;
}

export interface TrackWindowScrollProps {
  delayMethod?: LazyLoadImageDelayedMethod;
  delayTime?: number;
  useIntersectionObserver?: boolean;
}

interface ScrollAwareComponentState {
  scrollPosition: ScrollPosition;
}

function debounce<T extends(...args: any[]) => void>(func: T, wait: number): T {
  let timeout: NodeJS.Timeout | null = null;
  return function(this: any, ...args: Parameters<T>): void {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func.apply(this, args), wait);
  } as T;
}

function throttle<T extends(...args: any[]) => void>(func: T, wait: number): T {
  let lastCallTime = 0;
  return function(this: any, ...args: Parameters<T>): void {
    const now = Date.now();
    if (now - lastCallTime >= wait) {
      lastCallTime = now;
      func.apply(this, args);
    }
  } as T;
}

const getScrollX = (): number =>
  typeof window === 'undefined' ? 0 : window.scrollX || window.pageXOffset;
const getScrollY = (): number =>
  typeof window === 'undefined' ? 0 : window.scrollY || window.pageYOffset;

const trackWindowScroll = <P extends object>(
  BaseComponent: ComponentType<P & { scrollPosition: ScrollPosition | null; }>
) => {
  class ScrollAwareComponent extends Component<
    P & TrackWindowScrollProps,
    ScrollAwareComponentState
  > {
    useIntersectionObserver: boolean;
    delayedScroll: (() => void) | null = null;
    baseComponentRef: RefObject<any>;
    scrollElement: HTMLElement | Window | null = null;

    constructor(_props: P & TrackWindowScrollProps) {
      const props = {
        ..._props,
        delayMethod: _props.delayMethod || 'throttle',
        delayTime: _props.delayTime || 300,
        useIntersectionObserver: _props.useIntersectionObserver || true
      } as P & TrackWindowScrollProps;

      super(props);

      this.useIntersectionObserver = !!props.useIntersectionObserver && isIntersectionObserverAvailable();

      if (!this.useIntersectionObserver) {
        const onChangeScroll = this.onChangeScroll.bind(this);
        if (props.delayMethod === 'debounce') {
          this.delayedScroll = debounce(onChangeScroll, props.delayTime || 300);
        } else if (props.delayMethod === 'throttle') {
          this.delayedScroll = throttle(onChangeScroll, props.delayTime || 300);
        }
      }

      this.state = {
        scrollPosition: {
          x: getScrollX(),
          y: getScrollY()
        }
      };

      this.baseComponentRef = React.createRef();
    }

    componentDidMount() {
      this.addListeners();
    }

    componentWillUnmount() {
      this.removeListeners();
    }

    componentDidUpdate() {
      if (typeof window === 'undefined' || this.useIntersectionObserver) return;

      const newScrollElement = getScrollAncestor(this.baseComponentRef.current);
      if (newScrollElement !== this.scrollElement) {
        this.removeListeners();
        this.addListeners();
      }
    }

    addListeners() {
      if (typeof window === 'undefined' || this.useIntersectionObserver) return;

      this.scrollElement = getScrollAncestor(this.baseComponentRef.current);

      this.scrollElement.addEventListener('scroll', this.delayedScroll as EventListener, {
        passive: true
      });
      window.addEventListener('resize', this.delayedScroll as EventListener, {
        passive: true
      });

      if (this.scrollElement !== window) {
        window.addEventListener('scroll', this.delayedScroll as EventListener, {
          passive: true
        });
      }
    }

    removeListeners() {
      if (typeof window === 'undefined' || this.useIntersectionObserver) return;

      if (this.scrollElement) {
        this.scrollElement.removeEventListener('scroll', this.delayedScroll as EventListener);
      }
      window.removeEventListener('resize', this.delayedScroll as EventListener);

      if (this.scrollElement !== window) {
        window.removeEventListener('scroll', this.delayedScroll as EventListener);
      }
    }

    onChangeScroll() {
      if (this.useIntersectionObserver) return;

      this.setState({
        scrollPosition: {
          x: getScrollX(),
          y: getScrollY()
        }
      });
    }

    render() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { useIntersectionObserver: _, ...props } = this.props;
      const scrollPosition = this.useIntersectionObserver ? null : this.state.scrollPosition;

      return (
        <BaseComponent
          ref={this.baseComponentRef} // Pass ref directly here
          scrollPosition={scrollPosition}
          {...(props as P)}
        />
      );
    }
  }

  return ScrollAwareComponent;
};

export default trackWindowScroll;
