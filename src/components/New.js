import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/categories/categories';

const NewCat = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div>
      <h3>New Product</h3>
      {categories.map((category) => (
        <div key={category.id}>
          <p>
            {category.name}
            {category.description}
          </p>

        </div>
      ))}
    </div>
  );
};

export default NewCat;
