import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary fw-bold">About Us</h1>
        <p className="lead text-muted">
          Learn more about our special event and the people behind it ✨
        </p>
      </div>

      {/* Content Row */}
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-md-6 mb-4">
          <img
            src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd47"
            alt="About Event"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Content */}
        <div className="col-md-6">
          <h2 className="text-warning">🎉 Our Story</h2>
          <p className="fs-5 text-muted">
            This event is a celebration of togetherness, joy, and love. We want
            to create unforgettable memories with our closest friends and
            family. Your presence will make this occasion even more special 💖.
          </p>
          <p className="fs-5 text-muted">
            From the warm decor to the delightful food, every detail has been
            planned to ensure you have an amazing experience with us.
          </p>
          <button className="btn btn-primary btn-lg mt-3">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
