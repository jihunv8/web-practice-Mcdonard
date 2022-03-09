//스크롤 관련 훅들

import { useState, useEffect } from 'react';

//스크롤 이벤트가 발생할 때 스크롤 Y축 값을 상태로 저장 후 반환함
export const useScrollY = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return scrollY;
};
