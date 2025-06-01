import { useState } from 'react';
import '../styles/contact.css';

function Contact() {

  const [formData, setFormData] = useState({ fname: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Success");
    e.target.reset();
    const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input id='fname' name='fname' type="text" placeholder="Your Name" required onChange={handleChange} />
            <input id='email' name='email' type="email" placeholder="Your Email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"  onChange={handleChange} />
            <textarea type="text" id='message'  name='message' placeholder="Your Message" rows="5" required onChange={handleChange} />
            <button type="submit" value="Submit Now" >Send Message</button>
          </form>
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Email: teamzenith67@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
