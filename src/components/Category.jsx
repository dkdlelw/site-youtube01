import React from 'react';

import { categorys } from '../utils/contents';

const Category = ({ selectCategory, setSelectCategory }) => {
  return (
    <div>
      {categorys.map((category) => (
        <button
          style={{
            backgroundColor:
              category.name === selectCategory ? '#a3c8ee' : 'transparent',
          }}
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Category;
