import { useCallback, useState } from 'react';

function useToggler() {
  const [isShow, setShow] = useState(false);

  const toggler = useCallback(() => {
    setShow(_current => !_current);
  }, []);

  return [isShow, toggler, setShow] as const;
}

export default useToggler;
