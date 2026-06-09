import React, { useState } from 'react';

function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    gender: ''
  });
  
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }
    
    if (!formData.gender) {
      newErrors.gender = 'Выберите пол';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      onAddContact({ ...formData, id: Date.now() });
      setFormData({ name: '', email: '', message: '', gender: '' });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
      <div style={{ marginBottom: '15px' }}>
        <label>Имя:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Сообщение:</label><br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
        {errors.message && <div className="error">{errors.message}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Пол:</label><br />
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
        /> Мужской
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
          style={{ marginLeft: '10px' }}
        /> Женский
        {errors.gender && <div className="error">{errors.gender}</div>}
      </div>

      <button 
        type="submit"
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;