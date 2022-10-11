import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import PostList from "./PostList";
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
          path="add"
          element={isLoggedIn ? <TagAddForm /> : <Navigate to="/tag/add" />}
        />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};
