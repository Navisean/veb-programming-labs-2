import React, { useState } from 'react';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Введите email');
      setIsError(true);
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Неверный формат email');
      setIsError(true);
      return;
    }

    setMessage('Email успешно отправлен!');
    setIsError(false);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
      <div style={{ marginBottom: '15px' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введите email"
          style={{
            padding: '10px',
            width: '100%',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </div>
      
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Отправить
      </button>

      {message && (
        <p style={{
          marginTop: '15px',
          color: isError ? 'red' : 'green',
          fontWeight: 'bold'
        }}>
          {message}
        </p>
      )}
    </form>
  );
}

export default EmailForm;