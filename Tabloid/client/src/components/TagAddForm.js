import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addTag } from "../modules/tagManager";

export default function TagAddForm() {
  const navigate = useNavigate();
  const [tagText, setTagText] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    addTag({ name: tagText })
      .then(() => navigate("/"))
      .catch((err) => alert(`An error ocurred: ${err.message}`));
  };

  return (
    <Form onSubmit={submitForm}>
      <FormGroup>
        <Label for="tagText">Tag</Label>
        <Input
          id="tagText"
          type="textarea"
          onChange={(e) => setTagText(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Button>Save</Button>
      </FormGroup>
    </Form>
  );
}
