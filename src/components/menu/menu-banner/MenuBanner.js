import { Link } from 'react-router-dom';
import './MenuBanner.scss';

const MenuBanner = ({
  category = 'bugger',
  title = '',
  description = '',
  image = null,
}) => {
  return (
    <div className="MenuBanner" style={{ backgroundImage: `url(${image})` }}>
      <div className="menu-banner-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu/bugger">Menu</Link>
          <Link to={`/menu/${category}`}>{title}</Link>
        </nav>
      </div>
    </div>
  );
};

export default MenuBanner;
