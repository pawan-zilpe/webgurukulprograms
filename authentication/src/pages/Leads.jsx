import React, { useState } from "react";

const Leads = () => {
  // Dummy Lead Data
  const [leads, setLeads] = useState([
    { id: 1, name: "Rahul Sharma", email: "rahul@example.com", phone: "+91 9876543210", status: "New" },
    { id: 2, name: "Priya Verma", email: "priya@example.com", phone: "+91 9123456780", status: "Contacted" },
    { id: 3, name: "Aman Gupta", email: "aman@example.com", phone: "+91 9012345678", status: "Interested" },
    { id: 4, name: "Sneha Patil", email: "sneha@example.com", phone: "+91 9988776655", status: "Closed" },
  ]);

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">📋 Leads Management</h1>

      <div className="card shadow p-4">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={lead.id}>
                <td>{index + 1}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>
                  <span
                    className={`badge ${
                      lead.status === "New"
                        ? "bg-primary"
                        : lead.status === "Contacted"
                        ? "bg-warning text-dark"
                        : lead.status === "Interested"
                        ? "bg-info text-dark"
                        : "bg-success"
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-success me-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;
