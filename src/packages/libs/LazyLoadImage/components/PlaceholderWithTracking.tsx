'use client';

import trackWindowScroll from '@/packages/libs/LazyLoadImage/hoc/trackWindowScroll';

import PlaceholderWithoutTracking, { PlaceholderWithoutTrackingProps } from './PlaceholderWithoutTracking';

function PlaceholderWithTracking(props: PlaceholderWithoutTrackingProps) {
  return <PlaceholderWithoutTracking {...props} />;
}

export default trackWindowScroll(PlaceholderWithTracking);

