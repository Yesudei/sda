import React, { useState } from 'react';
import "../../../css/Login.css" 
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axiosInstance from '../../../axiosInstance';

function AdminLogin() {
  const navigate = useNavigate();

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

      console.log('✅ Admin Login response:', res.data);

      const accessToken = res.data.accessToken;
      const admin = res.data.admin;

      if (!accessToken || !admin) {
        setError('Нэвтрэхэд алдаа гарлаа');
        return;
      }

      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      localStorage.setItem('adminToken', accessToken);
      localStorage.setItem('adminUser', JSON.stringify(admin));

      navigate('/admin-panel');
    } catch (err) {
      console.error('❌ Admin Login error:', err.response || err);
      setError(err.response?.data?.message || 'Нэвтрэхэд алдаа гарлаа');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <div className="login-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <div className="login-box">
        <h2>Админ Нэвтрэх</h2>
        <p className="subtitle">Зөвхөн админ хэрэглэгч</p>

        <input
          type="text"
          placeholder="Нэвтрэх нэр"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />

        <input
          type="password"
          placeholder="Нууц"
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

export default AdminLogin;
