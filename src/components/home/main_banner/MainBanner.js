import './MainBanner.scss';
import { data } from './bannerData';
import { useEffect, useState } from 'react';

const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');
  const [isAutoSlideOn, setIsAutoSlideOn] = useState(true);
  const nextIndex = (currentIndex + 1) % data.length;
  const prevIndex = (currentIndex - 1 + data.length) % data.length;

  const autoSlideTime =
    data[currentIndex].type === 'image' ? 3 : data[currentIndex].time;

  const slideNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
    setSlideDirection('from-next');
  };

  const slidePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    setSlideDirection('from-prev');
  };

  const togleAutoSlide = () => {
    setIsAutoSlideOn((prev) => !prev);
  };

  useEffect(() => {
    let timeout = null;
    if (isAutoSlideOn) {
      timeout = setTimeout(() => slideNext(), autoSlideTime * 1000);
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
      <ul className="contents-list">
        {data.map((banner, i) => {
          let className = 'swiper-content';
          if (i === currentIndex) {
            className += ` current ${slideDirection}`;
          } else if (slideDirection === 'from-next' && i === prevIndex) {
            className += ' to-prev';
          } else if (slideDirection === 'from-prev' && i === nextIndex) {
            className += ' to-next';
          } else {
            className += ' hidden';
          }
          return (
            <li key={i} className={className}>
              <img src={banner.content} />
            </li>
          );
        })}
      </ul>
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
            style={{ animationDuration: `${autoSlideTime}s` }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
