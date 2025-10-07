import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const GeneratePdfPage = () => {
  const [users, setUsers] = useState([
    {
      name: "Om Pawar",
      email: "om@gmail.com",
      role: "Admin",
      token: "",
      info: "",
      mobile: "1234567890",
    },
    {
      name: "Pawan Singh",
      email: "pawan@gmail.com",
      role: "Editor",
      token: "",
      info: "",
      mobile: "9876543210",
    },
    {
      name: "Vikram Kumar",
      email: "vikram@gmail.com",
      role: "Viewer",
      token: "",
      info: "",
      mobile: "1122334455",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Viewer",
    token: "",
    info: "",
    mobile: "",
  });

  const openAddModal = () => {
    setModalType("add");
    setForm({
      name: "",
      email: "",
      role: "Viewer",
      token: "",
      info: "",
      mobile: "",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (index) => {
    setModalType("edit");
    setEditingIndex(index);
    setForm(users[index]);
    setIsModalOpen(true);
  };

  const openExtraModal = (index) => {
    setModalType("extra");
    setEditingIndex(index);
    setForm(users[index]);
    setIsModalOpen(true);
  };

  // Token generator
  const generateToken = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  // Generate PDF
  const generatePDF = (userList) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Users List", 14, 20);

    const tableColumn = ["Name", "Email", "Mobile", "Role", "Token", "Info"];
    const tableRows = userList.map((u) => [
      u.name,
      u.email,
      u.mobile || "-",
      u.role,
      u.token || "-",
      u.info || "-",
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      styles: { fontSize: 12 },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      alternateRowStyles: { fillColor: [240, 240, 240] },
    });

    doc.save("users_list.pdf");
  };

  const handleSave = () => {
    const newUser = { ...form, token: form.token || generateToken() };
    let updatedUsers = [...users];

    if (modalType === "add") {
      updatedUsers.push(newUser);
    } else if (modalType === "edit") {
      updatedUsers[editingIndex] = newUser;
    } else if (modalType === "extra") {
      updatedUsers[editingIndex] = {
        ...updatedUsers[editingIndex],
        info: form.info,
        mobile: form.mobile,
        token: users[editingIndex].token || generateToken(),
      };
    }

    setUsers(updatedUsers);
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Users Management
      </h1>

      <div className="flex gap-3 mb-4 flex-wrap">
        <button
          onClick={openAddModal}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add User
        </button>
        <button
          onClick={() => generatePDF(users)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Generate PDF
        </button>
      </div>

      <table className="w-full table-auto border border-gray-300 dark:border-gray-700 rounded-md">
        <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Mobile</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Token</th>
            <th className="border px-4 py-2">Info</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr
              key={i}
              className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td className="border px-4 py-2">{u.name}</td>
              <td className="border px-4 py-2">{u.email}</td>
              <td className="border px-4 py-2">{u.mobile || "-"}</td>
              <td className="border px-4 py-2">{u.role}</td>
              <td className="border px-4 py-2">{u.token || "-"}</td>
              <td className="border px-4 py-2">{u.info || "-"}</td>
              <td className="border px-4 py-2 space-x-2 flex flex-wrap gap-1">
                <button
                  onClick={() => openEditModal(i)}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => openExtraModal(i)}
                  className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Add Info
                </button>
                <button
                  onClick={() => handleDelete(i)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={() => generatePDF([u])}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Generate PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {modalType === "add"
                ? "Add User"
                : modalType === "edit"
                ? "Edit User"
                : "Add Extra Info"}
            </h2>

            {(modalType === "add" || modalType === "edit") && (
              <>
                <input
                  type="text"
                  className="w-full mb-2 px-3 py-2 border rounded"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  className="w-full mb-2 px-3 py-2 border rounded"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  type="text"
                  className="w-full mb-2 px-3 py-2 border rounded"
                  placeholder="Mobile"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                />
                <select
                  className="w-full mb-2 px-3 py-2 border rounded"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                >
                  <option>Admin</option>
                  <option>Editor</option>
                  <option>Viewer</option>
                </select>
              </>
            )}

            {modalType === "extra" && (
              <>
                <input
                  type="text"
                  className="w-full mb-2 px-3 py-2 border rounded"
                  placeholder="Mobile"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                />
                <textarea
                  className="w-full mb-2 px-3 py-2 border rounded"
                  placeholder="Info"
                  value={form.info}
                  onChange={(e) => setForm({ ...form, info: e.target.value })}
                />
              </>
            )}

            <div className="flex justify-end gap-2 mt-4">
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

export default GeneratePdfPage;
