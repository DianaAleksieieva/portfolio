import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [contentType, setContent] = useState('');

  function toggle() {
    setIsShowing(!isShowing);
  }

  function handleContent(type) {
    setContent(type)
  }

  return {
    isShowing,
    toggle,
    contentType,
    handleContent
  }
};

export default useModal;