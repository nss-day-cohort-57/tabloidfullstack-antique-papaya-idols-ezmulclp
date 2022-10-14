import { getToken } from "./authManager";

const apiUrl = "/api/category";

export const getAllCategories = () => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get categories.",
        );
      }
    });
  });
};

export const addCategory = (category) => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new category.",
        );
      }
    });
  });
};

export const updateCategory = (category) => {
  return getToken().then((token) => {
    return fetch(apiUrl + `/${category.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new category.",
        );
      }
    });
  });
};

export const deleteCategory = (id) => {
  return getToken().then((token) => {
    return fetch(apiUrl + `/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    }).then((resp) => {
      if (resp.ok) {
        return
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new category.",
        );
      }
    });
  });
};