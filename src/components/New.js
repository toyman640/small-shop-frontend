import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const NewCat = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  useEffect(() => {

  }, [dispatch]);
  return (
    <div>
      <h3>New Product</h3>
      {categories.map((category) => (
        <div key={category.id}>
          <p>
            {category.name}
          </p>

        </div>
      ))}
    </div>
  );
};

export default NewCat;
