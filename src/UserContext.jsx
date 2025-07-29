import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  // 🔁 Load from localStorage on first load
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const savedUser = localStorage.getItem("user");
  const savedAccessToken = localStorage.getItem("accessToken");

  if (savedUser && savedAccessToken) {
    setUser(JSON.parse(savedUser));
    setAccessToken(savedAccessToken);
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${savedAccessToken}`;
  }

  setLoading(false); // ✅ mark loading as complete
}, []);


  const login = (userData, access, refresh) => {
    setUser(userData);
    setAccessToken(access);
    setRefreshToken(refresh);

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);

    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${access}`;
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    delete axiosInstance.defaults.headers.common["Authorization"];
  };

  return (
    <UserContext.Provider
      value={{
        user,
        accessToken,
        refreshToken,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
