import MenuBanner from '../menu-banner/MenuBanner';
import { useParams } from 'react-router-dom';
import { getCategory } from './categoryList';
import MenuList from '../menu-list/MenuList';

const MenuWrapper = () => {
  const { category } = useParams();
  const currentCategory = getCategory(category);

  return (
    <>
      <MenuBanner
        category={category}
        title={currentCategory?.title}
        description={currentCategory?.description}
        image={currentCategory?.image}
      />
      <MenuList />
    </>
  );
};

export default MenuWrapper;
