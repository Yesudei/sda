import React, { useState, useContext } from 'react';
import '../css/Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axiosInstance from '../axiosInstance';
import { UserContext } from '../UserContext';

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    setIsLoading(true);

    try {
      const res = await axiosInstance.post('/user/login', {
        phoneNumber: phoneNumber.trim(),
        password: password.trim(),
      });

      const { accessToken, refreshToken, user } = res.data;

      if (!accessToken || !refreshToken || !user) {
        setError('Нэвтрэхэд алдаа гарлаа');
        setIsLoading(false);
        return;
      }

      // Save tokens and user
      login(user, accessToken, refreshToken);

      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      navigate('/student-portal');
    } catch (err) {
      setError(err.response?.data?.message || 'Нэвтрэхэд алдаа гарлаа');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <div className="login-box">
        <h2>Нэвтрэх</h2>
        <p className="subtitle">Өөрийн бүртгэлээр нэвтэрнэ үү</p>

        <input
          type="text"
          name="phoneNumber"
          placeholder="Утасны дугаар"
          className="input"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />

        <input
          type="password"
          name="password"
          placeholder="Нууц"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />

        {error && <div className="error-text">{error}</div>}

        <div className="forgot-password">
          <a href="#">Нууц үг мартсан?</a>
        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={isLoading || !phoneNumber.trim() || !password.trim()}
        >
          {isLoading ? 'Нэвтрэж байна...' : 'Нэвтрэх'}
        </button>

        <p className="register-text">
          Бүртгэл байхгүй юу? <Link to="/register">Бүртгүүлэх</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
