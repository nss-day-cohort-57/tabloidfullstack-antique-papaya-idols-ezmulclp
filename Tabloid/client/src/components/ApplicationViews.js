import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import { UserProfileList } from "./UserProfileList";

import TagList from "./TagList"

import TagAddForm from "./TagAddForm";
export default function ApplicationViews({ isLoggedIn }) {

  return (
    <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}
          />
          <Route
            index
            path="users" element={isLoggedIn ? <UserProfileList /> : <Navigate to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="tag" element={<TagList />} />
          <Route path="tag/add" element={<TagAddForm />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};
