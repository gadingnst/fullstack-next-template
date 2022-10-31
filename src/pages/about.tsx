import { withMainLayoutPage } from '@/components/layouts/page/Main';
import About, { getServerSideProps } from '@/views/About';

export { getServerSideProps };

export default withMainLayoutPage(About, props => ({
  title: `About ${props.maintainer}`
}));
