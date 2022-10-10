import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { AddPost } from "../modules/postManager";

export default function PostAddForm() {
  const navigate = useNavigate();
  const [postText, setPostText] = useState();

  const submitForm = (e) => {
    e.preventDefault();
  AddPost({ text: postText })
      .then(() => navigate("/"))
      .catch((err) => alert(`An error ocurred: ${err.message}`));
  };

  return (
    <Form onSubmit={submitForm}>
      <FormGroup>
        <Label for="postText">Post</Label>
        <Input
          id="postText"
          type="textarea"
          onChange={(e) => setPostText(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Button>Save</Button>
      </FormGroup>
    </Form>
  );
}