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
<<<<<<< Updated upstream
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
      const user = res.data.user; // Get user data directly from login response
      
      // Set Authorization header for future requests
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      
      // Update context with user data from login response
      login(user, accessToken);
      
      // Navigate to StudentPortal after successful login
      navigate('/student-portal');
      
=======
      const res = await axiosInstance.post('/user/login', { phoneNumber, password });
      const { token, user } = res.data;
      login(user, token);
      navigate('/home');
>>>>>>> Stashed changes
    } catch (err) {
      console.error('Login error:', err.response || err);
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
          placeholder="Нууц үг"
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
          {isLoading ? 'Нэвтэрч байна...' : 'Нэвтрэх'}
        </button>
        
        <p className="register-text">
          Бүртгэл байхгүй юу? <Link to="/register">Бүртгүүлэх</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;