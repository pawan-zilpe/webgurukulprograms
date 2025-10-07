import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Users, ShoppingBag, DollarSign, TrendingUp } from "lucide-react";

const DashboardPage = () => {
  // 📈 Chart Data (Revenue Trend)
  const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 4780 },
    { month: "May", revenue: 5890 },
    { month: "Jun", revenue: 6390 },
  ];

  const cards = [
    {
      title: "Total Users",
      value: "2,450",
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Total Orders",
      value: "1,290",
      icon: <ShoppingBag className="w-8 h-8 text-green-500" />,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Total Revenue",
      value: "$12,430",
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      color: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Growth Rate",
      value: "+14.2%",
      icon: <TrendingUp className="w-8 h-8 text-pink-500" />,
      color: "from-pink-500 to-pink-700",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
        🚀 Admin Overview
      </h1>

      {/* 🔹 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`relative overflow-hidden bg-gradient-to-r ${card.color} p-[1px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300`}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="text-gray-600 dark:text-gray-300 font-semibold">
                  {card.title}
                </div>
                {card.icon}
              </div>
              <div className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                {card.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 📊 Revenue Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Revenue Analytics (Last 6 Months)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#4F46E5"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardPage;
