import { getToken } from "./authManager";

const baseUrl = '/api/post';

export const getAllPosts = () => {
    return fetch(baseUrl)
    .then((res) => res.json())
};

export const AddPost = (post) => {
    return getToken().then((token) => {
      return fetch(baseUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }).then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else if (resp.status === 401) {
          throw new Error("Unauthorized");
        } else {
          throw new Error(
            "An unknown error occurred while trying to save a new post.",
          );
        }
      });
    });
  };