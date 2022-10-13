import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addCategory } from "../modules/categoryManager";

export default function CategoryAddForm() {
  const navigate = useNavigate();
  const [categoryText, setCategoryText] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    addCategory({ name: categoryText })
      .then(() => navigate("/category"))
      .catch((err) => alert(`An error ocurred: ${err.message}`));
  };

  return (
    <Form onSubmit={submitForm}>
      <FormGroup>
        <Label for="categoryText">Category</Label>
        <Input
          id="categoryText"
          type="textarea"
          onChange={(e) => setCategoryText(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Button>Save</Button>
      </FormGroup>
    </Form>
  );
}
