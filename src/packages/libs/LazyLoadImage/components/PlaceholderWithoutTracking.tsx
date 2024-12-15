'use client';

import React from 'react';

import { isIntersectionObserverAvailable } from '@/packages/libs/LazyLoadImage/utils/intersectionObserver';

export interface PlaceholderWithoutTrackingProps {
  className?: string;
  height?: number | string;
  onVisible: () => void;
  placeholder?: React.ReactNode;
  scrollPosition?: { x: number; y: number; };
  style?: React.CSSProperties;
  threshold?: number;
  useIntersectionObserver?: boolean;
  width?: number | string;
}

const checkIntersections = (entries: IntersectionObserverEntry[], onVisible: () => void) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      onVisible();
    }
  });
};

const LAZY_LOAD_OBSERVERS: { [key: string]: IntersectionObserver; } = {};

class PlaceholderWithoutTracking extends React.Component<PlaceholderWithoutTrackingProps> {
  private placeholder: HTMLElement | null = null;
  private observer: IntersectionObserver | null = null;

  componentDidMount() {
    if (this.placeholder && this.props.useIntersectionObserver) {
      if (isIntersectionObserverAvailable()) {
        const threshold = this.props.threshold || 0;
        const rootMargin = `${threshold}px`;

        const observerName = `${threshold}`;

        if (!LAZY_LOAD_OBSERVERS[observerName]) {
          LAZY_LOAD_OBSERVERS[observerName] = new IntersectionObserver(
            (entries) => checkIntersections(entries, this.props.onVisible),
            {
              rootMargin,
              threshold: 0
            }
          );
        }

        this.observer = LAZY_LOAD_OBSERVERS[observerName];
        this.observer.observe(this.placeholder);
      } else {
        this.props.onVisible();
      }
    } else {
      this.updateVisibility();
    }
  }

  componentDidUpdate() {
    if (!this.props.useIntersectionObserver) {
      this.updateVisibility();
    }
  }

  componentWillUnmount() {
    if (this.observer && this.placeholder) {
      this.observer.unobserve(this.placeholder);
    }
  }

  setPlaceholderRef = (element: HTMLElement | null) => {
    this.placeholder = element;
  };

  updateVisibility() {
    if (this.placeholder) {
      const { onVisible, scrollPosition, threshold = 100 } = this.props;
      const boundingRect = this.placeholder.getBoundingClientRect();
      const scrollY =
        scrollPosition && Number.isFinite(scrollPosition.y)
          ? scrollPosition.y
          : window.scrollY;
      const scrollX =
        scrollPosition && Number.isFinite(scrollPosition.x)
          ? scrollPosition.x
          : window.scrollX;

      if (
        scrollY + window.innerHeight >= boundingRect.top - threshold &&
        scrollY <= boundingRect.bottom + threshold &&
        scrollX + window.innerWidth >= boundingRect.left - threshold &&
        scrollX <= boundingRect.right + threshold
      ) {
        onVisible();
      }
    }
  }

  render() {
    const {
      className,
      height,
      placeholder,
      style,
      width,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      useIntersectionObserver, // We do not need to pass this down
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      scrollPosition, // We do not need to pass this down
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onVisible, // We do not need to pass this down
      ...rest
    } = this.props;

    return (
      <span
        className={className}
        ref={this.setPlaceholderRef}
        style={{
          display: 'inline-block',
          height,
          width,
          ...style
        }}
        {...rest} // Spread the remaining props that are not 'onVisible' or others
      >
        {placeholder}
      </span>
    );
  }
}

export default PlaceholderWithoutTracking;
