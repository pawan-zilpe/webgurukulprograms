import React, { useState } from "react";
import { toast } from "react-hot-toast"; // ✅ lightweight notification (optional)

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Viewer",
    photo: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("add"); // "add" or "edit"

  // ✅ Open Add User modal
  const openAddModal = () => {
    setModalType("add");
    setForm({ name: "", email: "", role: "Viewer", photo: "" });
    setIsModalOpen(true);
  };

  // ✅ Open Edit User modal
  const openEditModal = (index) => {
    setModalType("edit");
    setEditingIndex(index);
    setForm(users[index]);
    setIsModalOpen(true);
  };

  // ✅ Validation + Save
  const handleSave = () => {
    if (!form.name.trim()) {
      toast.error("Name is required!");
      return;
    }
    if (!form.email.trim()) {
      toast.error("Email is required!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Enter a valid email!");
      return;
    }

    const newUser = { ...form, photo: form.photo || "/default.png" };

    if (modalType === "add") {
      setUsers([...users, newUser]);
      toast.success("User added successfully!");
    } else {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = newUser;
      setUsers(updatedUsers);
      toast.success("User updated successfully!");
    }
    setIsModalOpen(false);
  };

  // ✅ Delete User
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
      toast("User deleted.", { icon: "🗑️" });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        👥 Users Management
      </h1>

      <button
        onClick={openAddModal}
        className="mb-4 px-5 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
      >
        + Add New User
      </button>

      {users.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-10">
          No users yet. Click “Add New User” to get started 👇
        </p>
      ) : (
        <table className="w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">Photo</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="py-3 px-4">
                  <img
                    src={u.photo || "/default.png"}
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                </td>
                <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                  {u.name}
                </td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                  {u.email}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      u.role === "Admin"
                        ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        : u.role === "Editor"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    }`}
                  >
                    {u.role}
                  </span>
                </td>
                <td className="py-3 px-4 space-x-2">
                  <button
                    onClick={() => openEditModal(i)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ✨ Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-md relative animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {modalType === "add" ? "Add New User" : "Edit User"}
            </h2>

            <div className="flex flex-col items-center mb-4">
              <img
                src={form.photo || "/default.png"}
                alt="preview"
                className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500 mb-2"
              />
              <input
                type="text"
                placeholder="Photo URL (optional)"
                value={form.photo}
                onChange={(e) => setForm({ ...form, photo: e.target.value })}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              />
            </div>

            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mb-3 px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mb-3 px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />

            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full mb-3 px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            >
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
