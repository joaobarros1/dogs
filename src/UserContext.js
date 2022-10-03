import React, { createContext } from "react";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  return (
    <UserContext.Provider value={{ usuario: "joao" }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
