import React, { useState, useContext } from 'react';
import "../../css/Login.css"
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 
import { UserContext } from '../../UserContext';
import axiosInstance from '../../axiosInstance';

function AdLogin() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    setIsLoading(true);

    try {
      const res = await axiosInstance.post('/admin/login', {
        username: username.trim(),
        password: password.trim(),
      });

      const { accessToken, refreshToken, admin } = res.data;

      if (!accessToken || !refreshToken || !admin) {
        setError('Админ нэвтрэхэд алдаа гарлаа');
        setIsLoading(false);
        return;
      }

      login(admin, accessToken, refreshToken);
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Нэвтрэхэд алдаа гарлаа');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleLogin();
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
          placeholder="Хэрэглэгчийн нэр"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          disabled={isLoading || !username.trim() || !password.trim()}
        >
          {isLoading ? 'Нэвтэрч байна...' : 'Нэвтрэх'}
        </button>
      </div>
    </div>
  );
}

export default AdLogin;
