// src/components/Register.jsx
import React, { useState } from 'react';
import '../css/Register.css';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import { FaArrowLeft } from 'react-icons/fa';

function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('✅ handleRegister called');
    setLoading(true);
    setError('');

    try {
      console.log('➡️ Sending registration data:', {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      });

      const res = await axiosInstance.post('/user/register', {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      });

      console.log('✅ Registration successful:', res.data);
      console.log('🚀 Navigating to /otp-verification with phoneNumber:', phoneNumber);

      navigate('/otp-verification', { state: { phoneNumber } });

    } catch (err) {
      console.error('❌ Registration error:', err);
      setError('Бүртгэл хийхэд алдаа гарлаа эсвэл хэрэглэгч аль хэдийн бүртгэгдсэн байна.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <form className="register-box" onSubmit={handleRegister}>
        <h2>Бүртгүүлэх</h2>
        <p className="subtitle">Шинэ бүртгэл үүсгэн хөгжмийн аялалаа эхлүүлээрэй</p>

        <div className="name-inputs">
          <input
            type="text"
            placeholder="Нэр"
            className="input name-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Овог"
            className="input name-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <input
          type="email"
          placeholder="И-мэйл"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Утасны дугаар"
          className="input"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Нууц үг"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button className="register-btn" type="submit" disabled={loading}>
          {loading ? 'Түр хүлээнэ үү...' : 'Бүртгүүлэх'}
        </button>
      </form>
    </div>
  );
}

export default Register;
