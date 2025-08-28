import React from "react";

const Welcome = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center bg-light" style={{ minHeight: "100vh" }}>
      {/* Heading */}
      <h1 className="display-3 fw-bold text-primary mb-3">
        🎓 Welcome to Our College Event 🎉
      </h1>

      {/* Sub-text */}
      <p className="lead text-muted mb-4">
        We are excited to have you with us for this special occasion.  
        Let’s celebrate knowledge, friendship, and unforgettable memories!
      </p>

      {/* Buttons */}
      <div>
        <a href="/about" className="btn btn-warning btn-lg me-3">
          Learn More
        </a>
        <a href="/invitation" className="btn btn-success btn-lg">
          View Invitation
        </a>
      </div>
    </div>
  );
};

export default Welcome;
