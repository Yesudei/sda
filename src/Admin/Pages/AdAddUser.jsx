import React, { useState } from 'react';
import "../../css/Login.css";
import axiosInstance from '../../axiosInstance';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function AdAddUser() {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleAddUser = async () => {
    setError('');
    setSuccess('');

    if (password.trim() !== repeatPassword.trim()) {
      setError('Нууц үг таарахгүй байна');
      return;
    }

    setIsLoading(true);

    try {
      const res = await axiosInstance.post('/admin/create', {
        username: username.trim(),
        phone: phone.trim(),
        password: password.trim(),
        role,
      });

      setSuccess('Хэрэглэгч амжилттай нэмэгдлээ!');
      setUsername('');
      setPhone('');
      setPassword('');
      setRepeatPassword('');
      setRole('user');
    } catch (err) {
      setError(err.response?.data?.message || 'Хэрэглэгч нэмэхэд алдаа гарлаа');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAddUser();
  };

  return (
    <div className="login-container admin-login-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <div className="login-box">
        <h2>Шинэ хэрэглэгч нэмэх</h2>
        <p className="subtitle">Хэрэглэгчийн нэр, утас, нууц үг, эрх</p>

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
          type="text"
          placeholder="Утасны дугаар"
          className="input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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

        <input
          type="password"
          placeholder="Нууц үг давтах"
          className="input"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />

        <select
          className="input"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          disabled={isLoading}
        >
          <option value="user">Хэрэглэгч</option>
          <option value="admin">Админ</option>
          <option value="teacher">Багш</option>
        </select>

        {error && <div className="error-text">{error}</div>}
        {success && <div className="success-text">{success}</div>}

        <button
          className="login-btn"
          onClick={handleAddUser}
          disabled={isLoading || !username.trim() || !password.trim() || !phone.trim()}
        >
          {isLoading ? 'Нэмэгдэж байна...' : 'Нэмэх'}
        </button>
      </div>
    </div>
  );
}

export default AdAddUser;
