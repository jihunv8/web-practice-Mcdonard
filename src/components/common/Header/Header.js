//전페이지 공통 헤더 컴포넌트

import './Header.scss';
import mainLogo from '../../../images/main-logo/logo.png';
import serchIcon from '../../../images/header/ico_search.png';
import { useScrollY } from '../../../hooks/scroll';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const scrollY = useScrollY();

  useEffect(() => {
    if (scrollY > 80) {
      setIsScrolledDown(true);
    } else if (scrollY <= 0) {
      setIsScrolledDown(false);
    }
  }, [scrollY]);

  return (
    <header className={`Header ${isScrolledDown ? 'scrolled' : ''}`}>
      <div className="header-container">
        <h1 className="header-logo">
          <a href="/" title="홈으로 이동">
            <img src={mainLogo} alt="맥도날드 로고" />
          </a>
        </h1>
        <nav className="mainpage-nav">
          <a href="">Menu</a>
          <a href="">Store</a>
          <a href="">What's New</a>
          <a href="">Story</a>
        </nav>
        <nav className="header-etc-nav">
          <a href="">임차문의</a>
          <a className="yellow" href="">
            RECRUIT
          </a>
          <a className="green" href="">
            ENG
          </a>
          <button className="header-search-button">
            <img src={serchIcon} alt="검색" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
