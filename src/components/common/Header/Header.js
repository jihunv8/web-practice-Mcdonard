//전페이지 공통 헤더 컴포넌트
import './Header.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollY } from '../../../hooks/scroll';

import headerMenu from './headerMenu';
import mainLogo from '../../../images/main-logo/logo.png';
import serchIcon from '../../../images/header/ico_search.png';

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isSubmenuHidden, setIsSubmenuHidden] = useState(true);
  const scrollY = useScrollY();

  useEffect(() => {
    if (scrollY > 80) {
      setIsScrolledDown(true);
    } else if (scrollY <= 0) {
      setIsScrolledDown(false);
    }
  }, [scrollY]);

  const hideSubmenu = () => {
    if (isSubmenuHidden === false) {
      setIsSubmenuHidden(true);
    }
  };

  const showSubmenu = () => {
    if (isSubmenuHidden === true) {
      setIsSubmenuHidden(false);
    }
  };

  return (
    <header
      className={`Header ${isScrolledDown ? 'scrolled' : ''} ${
        isSubmenuHidden ? '' : 'submenu-visible'
      }`}
      onMouseLeave={hideSubmenu}
    >
      <div className="header-container">
        <h1 className="header-logo">
          <Link to="/" title="홈으로 이동">
            <img src={mainLogo} alt="맥도날드 로고" />
          </Link>
        </h1>
        <nav className="mainpage-nav">
          {headerMenu.map((menu, i) => (
            <div key={i}>
              <Link
                to={menu.href}
                onMouseOver={showSubmenu}
                onClick={hideSubmenu}
              >
                {menu.menuName}
              </Link>
              <nav className={`submenu ${isSubmenuHidden ? 'hidden' : ''}`}>
                {menu.submenu.map((sub) => (
                  <Link to={sub.href} onClick={hideSubmenu}>
                    {sub.menuName}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
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
