import React, { useState } from "react";

const ContactSignup = () => {
  // State for Signup Form
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State for Contact Form
  const [contact, setContact] = useState({
    fullname: "",
    message: "",
  });

  // Handle Signup Change
  const handleSignupChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  // Handle Contact Change
  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // Submit Signup
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Signup Success!\nName: ${signup.name}\nEmail: ${signup.email}`);
  };

  // Submit Contact
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`📩 Message Sent!\nFrom: ${contact.fullname}\nMessage: ${contact.message}`);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary fw-bold">Signup & Contact</h1>
      <div className="row">
        {/* Signup Form */}
        <div className="col-md-6 mb-4">
          <div className="card shadow p-4">
            <h3 className="text-center text-success mb-3">📝 Signup Form</h3>
            <form onSubmit={handleSignupSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={signup.name}
                  onChange={handleSignupChange}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={signup.email}
                  onChange={handleSignupChange}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={signup.password}
                  onChange={handleSignupChange}
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Signup
              </button>
            </form>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <div className="card shadow p-4">
            <h3 className="text-center text-warning mb-3">📩 Contact Form</h3>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={contact.fullname}
                  onChange={handleContactChange}
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={contact.message}
                  onChange={handleContactChange}
                  className="form-control"
                  placeholder="Write your message..."
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSignup;
