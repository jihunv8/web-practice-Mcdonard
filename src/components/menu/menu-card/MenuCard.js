import './MenuCard.scss';

const MenuCard = ({ cardImage = null, nameKr = '', nameEn = '' }) => {
  return (
    <div className="MenuCard">
      <a href="">
        <img src={cardImage} />
        <h3 className="menu-name-kr">{nameKr}</h3>
        <h4 className="menu-name-en">{nameEn}</h4>
      </a>
    </div>
  );
};

export default MenuCard;
