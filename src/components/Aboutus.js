import React, { useState } from "react";
import bannerImg from "../asstes/breadcumb1.jpg"; // your banner image
import { FaLeaf, FaHamburger, FaDrumstickBite, FaBirthdayCake } from "react-icons/fa";
import foodImage from "../asstes/aboutimage.png";

export default function AboutPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('');
    try {
      const res =  await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
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
    <div className="about-page">
      {/* Banner Section */}
      <div className="about-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
        <h1>About us</h1>
      </div>

      {/* About Content */}
      <section className="about-content">
        <h2>Who we are and what we do?</h2>
        <p>
          Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt,
          sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante
          vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae.
        </p>
        <p className="small-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque
          tortor. Aenean congue sed metus in iaculis. Cras a tortor enim.
          Phasellus posuere vestibulum ipsum, eget lobortis purus.
        </p>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="stat-card">
          <FaLeaf className="stat-icon" />
          <h3>1287</h3>
          <p>Amazing receipies</p>
        </div>
        <div className="stat-card">
          <FaHamburger className="stat-icon" />
          <h3>25</h3>
          <p>Burger receipies</p>
        </div>
        <div className="stat-card">
          <FaDrumstickBite className="stat-icon" />
          <h3>471</h3>
          <p>Meat receipies</p>
        </div>
        <div className="stat-card">
          <FaBirthdayCake className="stat-icon" />
          <h3>326</h3>
          <p>Desert receipies</p>
        </div>
      </section>

      <div className="food-container">
        <img
          className="food-img"
          src={foodImage}
          alt="People eating food"
        />
      </div>

      <div className="contact-container">
        <h2>Contact Us</h2>
  <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
          {status && (
            <p style={{ textAlign: 'center', color: status.includes('success') ? 'green' : 'red', marginTop: 12 }}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
