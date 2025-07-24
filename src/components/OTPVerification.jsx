import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import { UserContext } from '../UserContext';
import '../css/OTPVerification.css';

function OTPVerification() {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber;

  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post('/otp/verify', {
        phoneNumber,
        code: otp,
      });

      console.log('✅ OTP Verified:', res.data);

      const { token, user } = res.data;

      // Save token and user to context
      login(user, token);

      // Redirect to protected home route
      navigate('/home');
    } catch (err) {
      console.error('❌ OTP Verification failed:', err);
      setError('OTP буруу байна эсвэл хугацаа дууссан байна');
    }
  };

  return (
    <div className="otp-container">
      <form className="otp-box" onSubmit={handleSubmit}>
        <h2>OTP баталгаажуулалт</h2>
        <p className="subtitle">Таны дугаар: {phoneNumber}</p>

        <input
          type="text"
          className="input otp-input"
          placeholder="OTP код оруулна уу"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          maxLength={6}
          inputMode="numeric"
          pattern="\d*"
        />

        {error && <p className="error" style={{ color: 'red' }}>{error}</p>}

        <button type="submit" className="verify-btn">
          Баталгаажуулах
        </button>
      </form>
    </div>
  );
}

export default OTPVerification;
