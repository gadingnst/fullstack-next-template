'use client';

import React from 'react';

import type { LazyLoadImageDelayedMethod } from '@/packages/libs/LazyLoadImage/components/interface';
import { isIntersectionObserverAvailable } from '@/packages/libs/LazyLoadImage/utils/intersectionObserver';

import PlaceholderWithoutTracking from './PlaceholderWithoutTracking';
import PlaceholderWithTracking from './PlaceholderWithTracking';

export interface LazyLoadComponentProps {
  afterLoad?: () => void;
  beforeLoad?: () => void;
  useIntersectionObserver?: boolean;
  visibleByDefault?: boolean;
  children: React.ReactNode;
  className?: string;
  delayMethod?: LazyLoadImageDelayedMethod;
  delayTime?: number;
  height?: number | string;
  placeholder?: React.ReactNode;
  scrollPosition?: { x: number; y: number; };
  style?: React.CSSProperties;
  threshold?: number;
  width?: number | string;
}

class LazyLoadComponent extends React.Component<LazyLoadComponentProps, { visible: boolean; }> {
  isScrollTracked: boolean|undefined;

  constructor(props: LazyLoadComponentProps) {
    super(props);

    const { afterLoad, beforeLoad, scrollPosition, visibleByDefault } = props;

    this.state = {
      visible: visibleByDefault || false
    };

    if (visibleByDefault) {
      beforeLoad?.();
      afterLoad?.();
    }

    this.onVisible = this.onVisible.bind(this);

    this.isScrollTracked = Boolean(
      scrollPosition &&
      Number.isFinite(scrollPosition.x) &&
      scrollPosition.x >= 0 &&
      Number.isFinite(scrollPosition.y) &&
      scrollPosition.y >= 0
    );
  }

  componentDidUpdate(prevProps: LazyLoadComponentProps, prevState: { visible: boolean; }) {
    if (prevState.visible !== this.state.visible) {
      this.props.afterLoad?.();
    }
  }

  onVisible() {
    this.props.beforeLoad?.();
    this.setState({
      visible: true
    });
  }

  render() {
    if (this.state.visible) {
      return this.props.children;
    }

    const {
      className,
      delayMethod,
      delayTime,
      height,
      placeholder,
      scrollPosition,
      style,
      threshold,
      useIntersectionObserver,
      width
    } = this.props;

    if (
      this.isScrollTracked ||
      (useIntersectionObserver && isIntersectionObserverAvailable())
    ) {
      return (
        <PlaceholderWithoutTracking
          className={className}
          height={height}
          onVisible={this.onVisible}
          placeholder={placeholder}
          scrollPosition={scrollPosition}
          style={style}
          threshold={threshold}
          width={width}
        />
      );
    }

    return (
      <PlaceholderWithTracking
        className={className}
        delayMethod={delayMethod}
        delayTime={delayTime}
        height={height}
        onVisible={this.onVisible}
        placeholder={placeholder}
        style={style}
        threshold={threshold}
        width={width}
      />
    );
  }
}

export default LazyLoadComponent;

