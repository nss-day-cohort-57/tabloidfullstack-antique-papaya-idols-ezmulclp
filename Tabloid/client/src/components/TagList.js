import React, { useEffect, useState } from "react";
import Tag from "./Tag";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { getAllTags } from "../modules/tagManager";

export default function TagList() {
    const navigate = useNavigate();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getAllTags().then(setTags);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/tag/add")

  }
  return (
    <>
    <Button onClick={handleClick}>Create Tag</Button>
    <section>
      {tags.map((q) => (
        <Tag key={q.id} tag={q} />
      ))}
    </section>
    </>
  );
}
