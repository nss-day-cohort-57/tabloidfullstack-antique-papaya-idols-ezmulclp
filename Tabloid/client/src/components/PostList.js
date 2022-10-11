import React, { useEffect, useState } from "react";
import { getAllPosts } from "../modules/postManager";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    getAllPosts().then(posts => setPosts(posts));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map(v => 
        <div>{v.title}</div>
      )}
    </div>
  );
}

export default PostList;