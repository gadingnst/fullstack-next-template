import createSSRProps, { type SSRNextFunction } from './createSSRProps';

/* this is only an example if you want to create custom getServerSideProps middleware using createSSRProps() */
function withSSRAuthProps<T>(next?: SSRNextFunction<T>) {
  return createSSRProps<T>((ctx) => {
    // check if user authenticated
    if (ctx.req.headers.cookie['Authorization']) {
      return next?.(ctx) || {
        props: {} as any
      };
    }
    return {
      redirect: {
        permanent: false,
        destination: '/auth-page'
      }
    };
  });
}

export default withSSRAuthProps;
