import { useCallback, useEffect, useRef, useState } from 'react';

const useIsClickOutside = () => {
  const [show, setShow] = useState(false);
  const refEl = useRef();

  // check if user clicked outside
  const checkOutside = useCallback((e) => {
    if (refEl.current && !refEl.current.contains(e.target)) setShow(false);
  }, []);

  // send click event listener
  useEffect(() => {
    window.addEventListener('click', checkOutside);

    return () => {
      window.removeEventListener('click', checkOutside);
    };
  }, [checkOutside]);

  // show components
  const onShow = () => setShow((prev) => !prev);

  return { refEl, show, onShow };
};

export default useIsClickOutside;
