import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/posts/post';

const Shop = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>This is Shop Component</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>
            {post.title}
          </p>

        </div>
      ))}
      <div>
        <form>
          <input type="text" name="title" placeholder="title" autoComplete="on" />
          <input type="number" name="price" placeholder="Amount" autoComplete="on" />
          <textarea type="text" name="description" placeholder="Decription" />
          <input type="file" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Shop;
