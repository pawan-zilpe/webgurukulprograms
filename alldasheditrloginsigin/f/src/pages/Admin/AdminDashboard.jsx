import React, { useContext, useState } from "react";
import { userContext } from "../../context/AppContext";
import DashboardPage from "./DashboardPage";
import UsersPage from "./UsersPage";
import ProfilePage from "./ProfilePage";
import VisualizationPage from "./VisualizationPage";
import GeneratePdfPage from "./GeneratePdfPage";
import ImageSearchPage from "./ImageSearchPage";
import ScreenRecorderPage from "./ScreenRecorderPage"; // Removed extra space
import BannerEditorPage from "./BannerEditorPage";

const AdminDashboard = () => {
  const { setIsLoggedIn } = useContext(userContext);
  const [activePage, setActivePage] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => setIsLoggedIn(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const pages = [
    {
      id: "dashboard",
      icon: "📊",
      label: "Dashboard",
      component: <DashboardPage />,
    },
    { id: "users", icon: "👥", label: "Users", component: <UsersPage /> },
    { id: "profile", icon: "🙍‍♂️", label: "Profile", component: <ProfilePage /> },
    {
      id: "visualization",
      icon: "📈",
      label: "Visualization",
      component: <VisualizationPage />,
    },
    {
      id: "GeneratePdfPage",
      icon: "📄",
      label: "Generate PDF",
      component: <GeneratePdfPage />,
    },
    {
      id: "ImageSearchPage",
      icon: "🖼️",
      label: "Image Search",
      component: <ImageSearchPage />,
    },
    {
      id: "ScreenRecorderPage",
      icon: "🎥",
      label: "Screen Recorder",
      component: <ScreenRecorderPage />,
    },
    {
      id: "BannerEditorPage",
      icon: "🎥",
      label: "BannerEditorPage",
      component: <BannerEditorPage />,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-72" : "w-16"
        } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-width duration-300`}
      >
        {/* Logo & Toggle */}
        <div className="flex items-center justify-between h-16 border-b dark:border-gray-700 px-2">
          {isSidebarOpen && (
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
              className="h-8 w-auto"
            />
          )}
          <button
            onClick={toggleSidebar}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isSidebarOpen ? "⬅️" : "➡️"}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-2">
          <ul className="space-y-2">
            {pages.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActivePage(item.id)}
                  className={`flex items-center w-full p-2 rounded-md font-semibold transition-colors duration-200 ${
                    activePage === item.id
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {isSidebarOpen && <span className="ml-3">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t dark:border-gray-700 flex justify-center">
          <button
            onClick={handleLogout}
            className={`flex items-center justify-center w-full ${
              isSidebarOpen ? "px-4 py-2" : "p-2"
            } bg-red-600 hover:bg-red-700 text-white rounded-md transition-all duration-300`}
            title="Logout"
          >
            <span className="text-lg">
              {isSidebarOpen ? "🚪 Logout" : "🚪"}
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {pages.map((item) => activePage === item.id && item.component)}
      </main>
    </div>
  );
};

export default AdminDashboard;
