import React, { useState, useContext } from 'react';
import '../css/Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axiosInstance, { setAuthToken } from '../axiosInstance';
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
      console.log('Attempting login with:', {
        phoneNumber: phoneNumber.trim(),
        password: password.trim(),
      });

      // 1. Login and get tokens
      const res = await axiosInstance.post('/user/login', {
        phoneNumber: phoneNumber.trim(),
        password: password.trim(),
      });

      console.log('Login response:', res.data);

      const { accessToken, refreshToken } = res.data;

      if (!accessToken || !refreshToken) {
        setError('Нэвтрэхэд алдаа гарлаа');
        setIsLoading(false);
        return;
      }

      // 2. Set token header for subsequent requests
      setAuthToken(accessToken);

      // 3. Fetch user profile
      const userRes = await axiosInstance.get('/user/getuser');
      const user = userRes.data;

      console.log('User profile:', user);

      // 4. Save user and tokens in context and localStorage
      login(user, accessToken, refreshToken);

      // 5. Navigate to protected page
      navigate('/student-portal');
    } catch (err) {
      console.error('Login error:', err);

      setError(
        err.response?.data?.message ||
          (err.request ? 'Server did not respond.' : 'Нэвтрэхэд алдаа гарлаа')
      );
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
