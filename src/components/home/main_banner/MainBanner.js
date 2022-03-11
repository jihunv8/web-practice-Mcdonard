import './MainBanner.scss';
import { useEffect, useState } from 'react';
import MainBannerList from '../main_banner_list/MainBannerList';

import { data as bannerContentsList } from './temp_data/bannerData';

const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');
  const [isAutoSlideOn, setIsAutoSlideOn] = useState(true);

  const slideNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerContentsList.length);
    setSlideDirection('from-next');
  };

  const slidePrev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + bannerContentsList.length) % bannerContentsList.length
    );
    setSlideDirection('from-prev');
  };

  const togleAutoSlide = () => {
    setIsAutoSlideOn((prev) => !prev);
  };

  useEffect(() => {
    let timeout = null;
    //timeout의 지연시간은 스타일의 animation-duration속성과 일치해야함.
    if (isAutoSlideOn) {
      timeout = setTimeout(() => slideNext(), 4000);
    }

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="MainBanner">
      <button className="slide-btn prev" onClick={slidePrev}>
        이전
      </button>
      <MainBannerList
        contentsList={bannerContentsList}
        currentIndex={currentIndex}
        slideDirection={slideDirection}
      />
      <button className="slide-btn next" onClick={slideNext}>
        다음
      </button>
      <div className="auto-slide-controller">
        <button
          className={`auto-slide-on-off-btn ${isAutoSlideOn ? 'on' : 'off'}`}
          onClick={togleAutoSlide}
        ></button>
        <div className="auto-slide-progress-bar">
          {/* 자동 슬라이드 프로그레스바 애니메이션 재생 문제 아직 미해결 */}
          <span
            className={`bar ${
              isAutoSlideOn ? `active${currentIndex % 2}` : ''
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
