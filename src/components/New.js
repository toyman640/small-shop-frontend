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
      <div>
        <form>
          <label onSubmit={handleSubmit}>
            Name:
            <input type="text" name="name" placeholder="Category name" />
          </label>
          <label>
            Description:
            <input type="text" name="Description" placeholder="Decription" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default NewCat;
