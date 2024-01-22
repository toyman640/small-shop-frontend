import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, createPosts } from '../redux/posts/post';
import { fetchCategories } from '../redux/categories/categories';

const Shop = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const categories = useSelector((state) => state.categories.categories);
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const categoryId = form.category_id.value;
    // const newPost = {
    //   title,
    //   price,
    //   description,
    // };

    // dispatch(createPosts(newPost));
    // form.reset();
    const formData = new FormData();
    formData.append('post[title]', title);
    formData.append('post[price]', price);
    formData.append('post[description]', description);
    formData.append('post[category_id]', categoryId);
    formData.append('post[image]', file);

    dispatch(createPosts(formData));
    form.reset();
    setFile(null);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchCategories());
  }, [dispatch]);

  console.log('Posts:', posts);

  return (
    <div>
      <h2>This is Shop Component</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>
            {post.title}
          </p>
          <p>
            {post.price}
          </p>
          <p>
            {post.description}
          </p>
          <img
            src={post.image_data_url}
            alt={` for ${post.title}`}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          {/* {post.image && (
          )} */}
          {/* {post.image_data && (
            <>
              <p>Image Metadata:</p>
              <ul>
                {Object.entries(JSON.parse(post.image_data).metadata).map(([key, value]) => (
                  <li key={key}>
                    <strong>
                      {key}
                      :
                    </strong>
                    {value}
                  </li>
                ))}
              </ul>
              <img
                src={`http://127.0.0.1:3000/${JSON.parse(post.image_data).metadata.id}`}
                alt={` for ${post.title}`}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </>
          )} */}

        </div>
      ))}
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="title" autoComplete="on" />
          <input type="number" name="price" placeholder="Amount" autoComplete="on" />
          <select
            name="category_id"
          >
            <option value="">Select Ctegory</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <textarea type="text" name="description" placeholder="Decription" />
          <input type="file" onChange={handleFileChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Shop;
