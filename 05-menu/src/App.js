import { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import data from './data';

function App() {
  const allCategories = ['all', ...new Set(data.map((item) => item.category))];

  const [menuItems, setMenuItems] = useState(data);
  const [categories, setcategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section className='menu-section'>
      <h1 className='title'>Our Menu</h1>
      <div className='separator'></div>
      <Categories categories={categories} filterItems={filterItems} />
      <section className='menu'>
        <Menu menuItems={menuItems} />
      </section>
    </section>
  );
}

export default App;
