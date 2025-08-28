import React from "react";

const Profile = () => {
  const user = {
    name: "Rahul Sharma",
    role: "Web Developer",
    bio: "Passionate about coding, design and creating beautiful web apps. 🚀",
    email: "rahul@example.com",
    phone: "+91 9876543210",
    image: "https://via.placeholder.com/200", // User Photo
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4 text-center">
        {/* Profile Image */}
        <img
          src={user.image}
          alt="Profile"
          className="rounded-circle mx-auto mb-3"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />

        {/* User Info */}
        <h2 className="text-primary">{user.name}</h2>
        <h5 className="text-muted">{user.role}</h5>
        <p className="mt-3">{user.bio}</p>

        {/* Contact Info */}
        <div className="d-flex justify-content-center gap-4 mt-4">
          <p className="mb-0"><b>Email:</b> {user.email}</p>
          <p className="mb-0"><b>Phone:</b> {user.phone}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4">
          <button className="btn btn-primary me-3">Edit Profile ✏️</button>
          <button className="btn btn-danger">Logout 🔒</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
