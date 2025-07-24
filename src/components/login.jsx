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

  const handleLogin = async () => {
    setError('');
    try {
      // Login request
      const res = await axiosInstance.post('/user/login', {
        phoneNumber: phoneNumber.trim(),
        password: password.trim(),
      });

      if (!res.data.success) {
        setError(res.data.message || 'Нэвтрэхэд алдаа гарлаа');
        return;
      }

      const accessToken = res.data.accessToken;

      // Set Authorization header for future requests
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      // Fetch user info after login
      const userRes = await axiosInstance.get('/user/me');

      if (!userRes.data.success) {
        setError(userRes.data.message || 'Хэрэглэгчийн мэдээллийг авах боломжгүй байна');
        return;
      }

      const user = userRes.data.user;

      // Update context
      login(user, accessToken);

      // Navigate to home page
      navigate('/home');
    } catch (err) {
      console.error('Login error:', err.response || err);
      setError(err.response?.data?.message || 'Нэвтрэхэд алдаа гарлаа');
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
        />

        <input
          type="password"
          name="password"
          placeholder="Нууц үг"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div className="error-text">{error}</div>}

        <div className="forgot-password">
          <a href="#">Нууц үг мартсан?</a>
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Нэвтрэх
        </button>

        <p className="register-text">
          Бүртгэл байхгүй юу? <Link to="/register">Бүртгүүлэх</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
