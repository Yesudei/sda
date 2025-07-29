import React, { useState, useContext } from "react";
import "../../css/Login.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { UserContext } from "../../UserContext";
import axiosInstance from "../../axiosInstance";

function AdLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(UserContext);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Redirect back to the page user wanted before login or default to /admin/panel
  const from = location.state?.from?.pathname || "/admin/panel";

  const setAuthToken = (token) => {
    if (token) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common["Authorization"];
    }
  };

  const handleLogin = async () => {
    setError("");
    setIsLoading(true);

    try {
      // Send login request
      const res = await axiosInstance.post("/admin/adminLogin", {
        phoneNumber: phoneNumber.trim(),
        password: password.trim(),
      });

      const { accessToken, refreshToken } = res.data;

      if (!accessToken || !refreshToken) {
        setError("Админ нэвтрэхэд алдаа гарлаа");
        setIsLoading(false);
        return;
      }

      setAuthToken(accessToken);

      // Get logged-in user details
      const userRes = await axiosInstance.get("/user/getUser");
      const adminUser = userRes.data;

      // Save user and tokens in context
      login(adminUser, accessToken, refreshToken);

      // Navigate to the page user tried to access before login, or admin panel by default
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Нэвтрэхэд алдаа гарлаа");
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
