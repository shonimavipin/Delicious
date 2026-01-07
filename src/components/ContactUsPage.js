import React, { useState } from 'react';
import logo from '../asstes/logo.png';
import bg1 from '../asstes/bg1.jpg';

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('');
    try {
      const res = await fetch('https://delicious-04.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('✅ Message sent successfully!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(data.error || 'Error sending message.');
      }
    } catch {
      setStatus('❌ Server error. Please try again later.');
    }
  };

  return (
    <>
      <div style={{
        maxWidth: 1200, margin: '40px auto', padding: 24, display: 'flex',
        gap: 40, alignItems: 'flex-start', justifyContent: 'center'
      }}>
        {/* Left Info */}
        <div style={{ flex: 1, minWidth: 350 }}>
          <img src={logo} alt="Delicious Logo" style={{ height: 60, marginBottom: 16 }} />
          <p style={{ color: '#888', fontSize: 16, marginBottom: 24 }}>
            Get in touch with us for any questions or feedback. We'd love to hear from you!
          </p>
        </div>

        {/* Middle Details */}
        <div style={{
          flex: 1, minWidth: 300, maxWidth: 350, display: 'flex',
          flexDirection: 'column', justifyContent: 'flex-start', lineHeight: 2
        }}>
          <b style={{ color: '#4caf50' }}>Address:</b>
          <span style={{ color: '#4caf50' }}>481 Creekside Lane, Avila Beach, CA 93424</span>
          <b style={{ color: '#4caf50', marginTop: 12 }}>Phone:</b>
          <span style={{ color: '#4caf50' }}>+53 345 7953 32453</span>
          <b style={{ color: '#4caf50', marginTop: 12 }}>Email:</b>
          <span style={{ color: '#4caf50' }}>yourmail@gmail.com</span>
        </div>

        {/* Right Subscribe */}
        <div style={{
          flex: 1, minWidth: 350, maxWidth: 420, background: '#111',
          borderRadius: 4, color: 'white', overflow: 'hidden', position: 'relative',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', minHeight: 320
        }}>
          <form style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 24, zIndex: 2, position: 'relative' }}>
            <input type="email" placeholder="Subscribe to newsletter"
              style={{ width: '100%', padding: 12, borderRadius: 2, border: 'none', fontSize: 16 }} />
            <button type="submit"
              style={{ background: '#4caf50', color: 'white', border: 'none', fontSize: 18, padding: '12px 0', cursor: 'pointer', borderRadius: 2 }}>
              Subscribe
            </button>
          </form>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 180, zIndex: 1 }}>
            <img src={bg1} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px',
              color: 'white', fontStyle: 'italic', fontSize: 15, background: 'rgba(0,0,0,0.0)',
              zIndex: 2, textShadow: '0 1px 6px #000'
            }}>
              Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie.
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div style={{ maxWidth: 800, margin: '60px auto', padding: 24 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Get In Touch</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', gap: 24 }}>
            <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Name" required
              style={{ flex: 1, padding: 18, background: '#f6f8fa', border: 'none', borderRadius: 2 }} />
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="E-mail" required
              style={{ flex: 1, padding: 18, background: '#f6f8fa', border: 'none', borderRadius: 2 }} />
          </div>
          <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Subject" required
            style={{ padding: 18, background: '#f6f8fa', border: 'none', borderRadius: 2 }} />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={6} required
            style={{ padding: 18, background: '#f6f8fa', border: 'none', borderRadius: 2 }} />
          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={{
              background: '#44c12c', color: 'white', border: 'none',
              padding: '18px 48px', fontSize: 18, borderRadius: 4, cursor: 'pointer'
            }}>
              Send
            </button>
          </div>
          {status && (
            <p style={{ textAlign: 'center', color: status.includes('success') ? 'green' : 'red' }}>
              {status}
            </p>
          )}
        </form>
      </div>
    </>
  );
}
