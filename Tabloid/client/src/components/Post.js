import React from "react";
import { Card, CardBody } from "reactstrap";

const Post = ({ post }) => {
  return (
    <Card >
      <p className="text-left px-2">Posted by: {post.userProfile.displayName}</p>
      <CardBody>
        <strong>{post.title}</strong>
        <p>{post.category.name}</p>
      </CardBody>
    </Card>
  );
};

export default Post;