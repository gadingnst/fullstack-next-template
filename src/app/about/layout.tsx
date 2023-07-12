import { FC, PropsWithChildren } from 'react';
import { withMobileLayoutPage } from '@/packages/components/layouts/Pages/Mobile';
import { withMetadata } from '@/packages/utils/metadata';

const AboutLayout: FC<PropsWithChildren> = ({ children }) => children;

export const metadata = withMetadata({
  title: 'About'
});

export default withMobileLayoutPage(AboutLayout, {
  classNameMobile: 'shadow-violet-500 px-3'
});
