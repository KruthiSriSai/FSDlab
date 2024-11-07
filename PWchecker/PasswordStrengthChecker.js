import React, { useState } from 'react';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = (password) => {
    const strengthCriteria = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[!@#$%^&*]/.test(password)
    ];

    const score = strengthCriteria.filter(Boolean).length;
    return score === 5 ? 'Strong' : score >= 3 ? 'Medium' : 'Weak';
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrength(checkStrength(newPassword));
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />
      <p>Password Strength: <strong>{strength}</strong></p>
    </div>
  );
};

export default PasswordStrengthChecker;