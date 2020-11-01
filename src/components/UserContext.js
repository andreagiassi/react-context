import React, { createContext, useState } from "react";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("1");
  const [token, setToken] = useState("Token");

  return (
    <UserContext.Provider
      value={{
        userId,
        token,
        setUserId,
        setToken
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
