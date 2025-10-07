import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const VisualizationPage = () => {
  // 📈 Dummy Data
  const userGrowth = [
    { month: "Jan", users: 200 },
    { month: "Feb", users: 350 },
    { month: "Mar", users: 500 },
    { month: "Apr", users: 750 },
    { month: "May", users: 900 },
    { month: "Jun", users: 1200 },
  ];

  const orderStats = [
    { name: "Completed", value: 400 },
    { name: "Pending", value: 150 },
    { name: "Cancelled", value: 70 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 2400 },
    { month: "Feb", revenue: 1398 },
    { month: "Mar", revenue: 9800 },
    { month: "Apr", revenue: 3908 },
    { month: "May", revenue: 4800 },
    { month: "Jun", revenue: 3490 },
  ];

  const COLORS = ["#4F46E5", "#10B981", "#F59E0B"];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        📊 Data Visualization
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart - User Growth */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            User Growth (Monthly)
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={userGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#4F46E5"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Revenue */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Monthly Revenue
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#10B981" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Orders */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow lg:col-span-2">
          <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Order Status Breakdown
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={orderStats}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {orderStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default VisualizationPage;
