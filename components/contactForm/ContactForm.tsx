"use client"
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  surname: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<string>('');
  const [statusType, setStatusType] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Xabar yuborildi');
      setStatusType('success');
      setFormData({
        name: '',
        surname: '',
        phone: '',
        message: '',
      });
    } else {
      setStatus('Xatolik yuz berdi');
      setStatusType('error');
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer if component unmounts or status changes
    }
  }, [status]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Ism</label>
          <input
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Familiya</label>
          <input 
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefon raqam</label>
          <input
            id="phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Sizga qanday yordam bera olamiz?</label>
          <textarea 
            id="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="form-submit-btn">Yuborish</button>
        {status && (
          <p className={`status-message ${statusType === 'success' ? 'status-success' : 'status-error'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
