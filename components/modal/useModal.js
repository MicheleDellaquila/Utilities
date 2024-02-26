import { useRef, useEffect } from 'react';

const useModal = () => {
  const refModal = useRef();
  const refModalContent = useRef();

  // check is users clicked outside of modal
  const handleClickOutside = (e) => {
    if (!refModal.current) return;
    const { open } = refModal.current;

    // check modal is open
    if (!open) refModal.current.showModal();

    // check if user clicked outside of modal
    if (!refModalContent.current.contains(e.target) && open)
      return refModal.current.close();
  };

  // handle visibility of modal
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return { refModal, refModalContent };
};

export default useModal;
