import { FC, PropsWithChildren } from 'react';
import { withMobileLayoutPage } from '@/packages/components/layouts/Pages/Mobile';

const AboutLayout: FC<PropsWithChildren> = ({ children }) => children;

export default withMobileLayoutPage(AboutLayout, {
  classNameMobile: 'shadow-violet-500 px-3'
});
