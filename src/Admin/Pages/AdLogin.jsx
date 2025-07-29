import React, { useState, useContext } from "react";
import "../../css/Login.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { UserContext } from "../../UserContext";
import axiosInstance from "../../axiosInstance";

function AdLogin() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

  const handleLogin = async () => {
  setError("");
  setIsLoading(true);

  console.log("Starting login...");

  try {
    console.log("Sending login request to /admin/adminLogin", {
      phoneNumber: phoneNumber.trim(),
      password: password.trim(),
    });

    const res = await axiosInstance.post("/admin/adminLogin", {
      phoneNumber: phoneNumber.trim(),
      password: password.trim(),
    });

    console.log("Login response:", res.data);

    const { accessToken, refreshToken } = res.data;

    if (!accessToken || !refreshToken) {
      console.error("Tokens missing in login response");
      setError("Админ нэвтрэхэд алдаа гарлаа");
      setIsLoading(false);
      return;
    }

    setAuthToken(accessToken); 

    console.log("Fetching user details from /admin/me");

    const userRes = await axiosInstance.get("/admin/me");

    console.log("User details:", userRes.data);

    const adminUser = userRes.data;

    login(adminUser, accessToken, refreshToken);

    navigate("/admin/dashboard");
  } catch (err) {
    console.error("Login error:", err);
    console.error("Full error response:", err.response);

    setError(
      err.response?.data?.message || "Нэвтрэхэд алдаа гарлаа"
    );
  } finally {
    setIsLoading(false);
  }
};


  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="login-container admin-login-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <div className="login-box">
        <h2>Админ нэвтрэх</h2>
        <p className="subtitle">Админ эрхээр нэвтэрнэ үү</p>

        <input
          type="text"
          placeholder="Утасны дугаар"
          className="input"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />

        <input
          type="password"
          placeholder="Нууц үг"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />

        {error && <div className="error-text">{error}</div>}

        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={isLoading || !phoneNumber.trim() || !password.trim()}
        >
          {isLoading ? "Нэвтэрч байна..." : "Нэвтрэх"}
        </button>
      </div>
    </div>
  );
}

export default AdLogin;
