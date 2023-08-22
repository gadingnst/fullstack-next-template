import NextLink, { type Props } from '@/packages/components/base/Navigations/NextLink';
import cn from '@/packages/utils/cn';

function Link(props: Props) {
  return (
    <NextLink
      {...props}
      className={cn([
        'text-blue-500 underline-offset-4 decoration-dashed no-underline hover:underline',
        props.className
      ])}
    />
  );
}

export default Link;
