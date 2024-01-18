import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, createCategories } from '../redux/categories/categories';

const NewCat = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const newCategory = {
      name,
      description,
    };

    dispatch(createCategories(newCategory));
    form.reset();
  };
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
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Category name" autoComplete="on" />
          <textarea type="text" name="description" placeholder="Decription" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default NewCat;
