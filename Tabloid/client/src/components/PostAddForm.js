import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addPost } from "../modules/postManager";

const PostAddForm = () => {
  const navigate = useNavigate();
  const emptyPost = {
    title: "",
    content: "",
    categoryId: 0,
    imageLocation: "",
    publishDateTime: Date.now,
    createDateTime: Date.now,
    // isApproved: true,
    //userProfileId: 0
  }
  
  const [post, setPost] = useState(emptyPost);

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const postCopy = { ...post };

    postCopy[key] = value;
    setPost(postCopy);
  };

  const handleSave = (evt) => {
    evt.preventDefault();

    addPost(post).then((p) => {
      navigate("/");
    });
  };


  return (
    <Form>
      <FormGroup>
        <Label for="title">Post Title</Label>
        <Input
          id="title"
          type="text"
          //value={post.title}
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="categoryId">CategoryId</Label>
        <Input
          id="categoryId"
          type="number"
          //value={post.categoryId}
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="imageLocation">Image Location</Label>
        <Input
          id="imageLocation"
          type="text"
          //value={post.imageLocation}
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="content">Post Content</Label>
        <Input
          id="content"
          type="textarea"
          //value={post.content}
          onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="createDateTime">Date Created</Label>
        <Input
          id="createDateTime"
          type="date"
          //value={post.createDateTime}
          onChange={handleInputChange}/>
      </FormGroup>
      {/* <FormGroup>
        <Label for="publishDateTime">Date Published</Label>
        <Input
          id="publishDateTime"
          type="date"
          value={post.publishDateTime}
          onChange={handleInputChange}/>
      </FormGroup> */}
      <FormGroup>
        <Label for="userProfileId">User Profile Id</Label>
        <Input
          id="userProfileId"
          type="number"
          //value={post.userProfileId}
          onChange={handleInputChange}/>
      </FormGroup>
    
        <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
     
    </Form>
  );
}

export default PostAddForm;
