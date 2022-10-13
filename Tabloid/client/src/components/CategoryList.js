import React, { useEffect, useState } from "react";
import Category from "./Category";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../modules/categoryManager";

export default function CategoryList() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then(setCategories);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/category/add")

  }
  return (
    <>
      <Button onClick={handleClick}>Create Category</Button>
      <section>
        {categories.map((q) => (
          <Category key={q.id} category={q} />
        ))}
      </section>
    </>
  );
}
