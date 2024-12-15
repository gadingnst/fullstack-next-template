'use client';

import React from 'react';

import type { LazyLoadImageDelayedMethod } from '@/packages/libs/LazyLoadImage/components/interface';

import LazyLoadComponent from './LazyLoadComponent';

export interface LazyLoadImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  afterLoad?: () => void;
  beforeLoad?: () => void;
  delayMethod?: LazyLoadImageDelayedMethod;
  delayTime?: number;
  effect?: string;
  placeholder?: React.ReactNode;
  placeholderSrc?: string;
  scrollPosition?: { x: number; y: number; };
  threshold?: number;
  useIntersectionObserver?: boolean;
  visibleByDefault?: boolean;
  wrapperClassName?: string;
  wrapperProps?: React.HTMLAttributes<HTMLSpanElement>;
}

class LazyLoadImage extends React.Component<LazyLoadImageProps, { loaded: boolean; }> {
  constructor(props: LazyLoadImageProps) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  onImageLoad = () => {
    if (this.state.loaded) {
      return () => {};
    }

    return (e: React.SyntheticEvent<HTMLImageElement>) => {
      this.props.onLoad?.(e);
      this.props.afterLoad?.();

      this.setState({
        loaded: true
      });
    };
  };

  getImg() {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      useIntersectionObserver: _useIntersectionObserver,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      wrapperClassName: _wrapperClassName,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      wrapperProps: _wrapperProps,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      placeholderSrc: _placeholderSrc,
      ...imgProps
    } = this.props;

    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...imgProps} onLoad={this.onImageLoad()} />;
  }

  getLazyLoadImage() {
    const {
      beforeLoad,
      className,
      delayMethod,
      delayTime,
      height,
      placeholder,
      scrollPosition,
      style,
      threshold,
      useIntersectionObserver,
      visibleByDefault,
      width
    } = this.props;

    return (
      <LazyLoadComponent
        beforeLoad={beforeLoad}
        className={className}
        delayMethod={delayMethod}
        delayTime={delayTime}
        height={height}
        placeholder={placeholder}
        scrollPosition={scrollPosition}
        style={style}
        threshold={threshold}
        useIntersectionObserver={useIntersectionObserver}
        visibleByDefault={visibleByDefault}
        width={width}
      >
        {this.getImg()}
      </LazyLoadComponent>
    );
  }

  getWrappedLazyLoadImage(lazyLoadImage: React.ReactNode) {
    const {
      effect,
      height,
      placeholderSrc,
      width,
      wrapperClassName,
      wrapperProps
    } = this.props;
    const { loaded } = this.state;

    const loadedClassName = loaded ? ' lazy-load-image-loaded' : '';
    const wrapperBackground =
      loaded || !placeholderSrc
        ? {}
        : {
          backgroundImage: `url(${placeholderSrc})`,
          backgroundSize: '100% 100%'
        };

    return (
      <span
        className={
          `${wrapperClassName || ''} lazy-load-image-background ${effect || ''}${loadedClassName}`
        }
        style={{
          ...wrapperBackground,
          color: 'transparent',
          display: 'inline-block',
          height,
          width
        }}
        {...wrapperProps}
      >
        {lazyLoadImage}
      </span>
    );
  }

  render() {
    const {
      effect,
      placeholderSrc,
      visibleByDefault,
      wrapperClassName,
      wrapperProps
    } = this.props;

    const lazyLoadImage = this.getLazyLoadImage();
    const needsWrapper = (effect || placeholderSrc) && !visibleByDefault;

    if (!needsWrapper && !wrapperClassName && !wrapperProps) {
      return lazyLoadImage;
    }

    return this.getWrappedLazyLoadImage(lazyLoadImage);
  }
}

export default LazyLoadImage;

