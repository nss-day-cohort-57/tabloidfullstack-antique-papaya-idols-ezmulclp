import React from "react";
import { Card, CardBody } from "reactstrap";

const Post = ({ post }) => {
  return (
    <Card >
      <p className="text-left px-2">Posted by: {post.userProfileId}</p>
      <CardBody>
        <strong>{post.title}</strong>
        <p>{post.content}</p>
        <p>{post.categoryId}</p>
      </CardBody>
    </Card>
  );
};

export default Post;