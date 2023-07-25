import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = {
    id: 1,
    name: "John Doe",
    likedPost: [1, 2, 5],
    posts: [2, 3, 5],
  };

  const isLiked = (post) => {
    if (user.likedPost.includes(post.id)) {
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider value={{ user, isLiked }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
