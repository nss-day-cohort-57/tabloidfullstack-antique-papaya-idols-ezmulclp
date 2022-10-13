import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import PostAddForm from "./PostAddForm";
import PostList from "./PostList";
import { UserProfileList } from "./UserProfileList";

import TagList from "./TagList"
import TagAddForm from "./TagAddForm";
import { UserProfileDetails } from "./UserProfileDetails";
import CategoryList from "./CategoryList"
import CategoryAddForm from "./CategoryAddForm";

export default function ApplicationViews({ isLoggedIn, isAdmin }) {

  return (
    <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}
          />
          <Route path="post" element={<PostList />} />
          <Route path="post/add" element={<PostAddForm />} />


          <Route
            index
            path="users" element={isLoggedIn ? <UserProfileList /> : <Navigate to="/login" />} />
          <Route
            path="users/:firebaseUserId" element={isLoggedIn ? <UserProfileDetails /> : <Navigate to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="tag" element={<TagList />} />
          <Route path="tag/add" element={<TagAddForm />} />
          <Route path="category" element={<CategoryList />} />
          <Route path="category/add" element={<CategoryAddForm />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};

