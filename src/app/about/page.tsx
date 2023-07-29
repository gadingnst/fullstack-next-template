import AboutPage from '@/modules/About/About.page';
import { withMobileLayoutPage } from '@/packages/components/layouts/Pages/Mobile';
import { withMetadata } from '@/packages/utils/metadata';

export const metadata = withMetadata({
  title: 'About'
});

export default withMobileLayoutPage(AboutPage, {
  className: 'shadow-violet-500 px-3'
});
