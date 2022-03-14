//전페이지 공통 헤더 컴포넌트
import './Header.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollY } from '../../../hooks/scroll';

import mainLogo from '../../../images/main-logo/logo.png';
import serchIcon from '../../../images/header/ico_search.png';

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
          <Link to="/" title="홈으로 이동">
            <img src={mainLogo} alt="맥도날드 로고" />
          </Link>
        </h1>
        <nav className="mainpage-nav">
          <Link to="/menu/bugger">Menu</Link>
          <Link to="/unimplemented">Store</Link>
          <Link to="/unimplemented">What's New</Link>
          <Link to="/unimplemented">Story</Link>
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
