import React, { useState } from "react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Om Pawar",
    email: "om@gmail.com",
    role: "Admin",
    photo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfile({ ...profile, photo: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        👤 User Profile
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        {/* Profile Top Section */}
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={profile.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-indigo-500 object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              {profile.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{profile.role}</p>
          </div>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="ml-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Profile Form */}
        {isEditing && (
          <form className="space-y-4" onSubmit={handleSave}>
            <div className="flex items-center space-x-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1">
                  Profile Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100
                    dark:file:bg-gray-700 dark:file:text-gray-200 dark:hover:file:bg-gray-600"
                />
              </div>
              <img
                src={profile.photo}
                alt="Preview"
                className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300">
                Role
              </label>
              <select
                name="role"
                value={profile.role}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              >
                <option>Admin</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>
            </div>

            <div className="flex space-x-4 mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
