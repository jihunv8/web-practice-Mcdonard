import './MainBannerList.scss';

const MainBannerList = ({
  contentsList = [],
  currentIndex = -1,
  slideDirection = '',
}) => {
  const prevIndex =
    (currentIndex - 1 + contentsList.length) % contentsList.length;
  const nextIndex = (currentIndex + 1) % contentsList.length;

  return (
    <ul className="MainBannerList">
      {contentsList.map((banner, i) => {
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
            <img src={banner.bannerImage} />
          </li>
        );
      })}
    </ul>
  );
};

export default MainBannerList;
