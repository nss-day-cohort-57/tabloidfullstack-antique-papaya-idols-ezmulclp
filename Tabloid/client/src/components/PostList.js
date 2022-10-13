import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap"
import { getAllPosts } from "../modules/postManager";
import Post from './Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const getPosts = () => {
    getAllPosts().then(posts => setPosts(posts));
  };

  const handleClick = (e) => {
    e.preventDefault()
    navigate("/post/add")
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
    <Button onClick={handleClick}>Create Post</Button>
    <div className="container">
      <div className="row justify-content-center">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
    </>
  );
}

export default PostList;