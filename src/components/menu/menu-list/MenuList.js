import './MenuList.scss';
import CardList from '../../common/card_list/CardList';
import MenuCard from '../menu-card/MenuCard';

import tempImage from './1646205975831.png';

const MenuList = () => {
  const tempData = new Array(10).fill(0);
  const cardCreator = () => (
    <MenuCard
      cardImage={tempImage}
      nameKr={'케이준 치즈 맥치킨'}
      nameEn={'Cajun Cheese McChicken'}
    />
  );

  return (
    <div className="MenuList">
      <div className="num-of-products">{`${tempData.length} Products`}</div>
      <CardList
        cardList={tempData}
        cardListMax={20}
        cardCreator={cardCreator}
      />
    </div>
  );
};

export default MenuList;
