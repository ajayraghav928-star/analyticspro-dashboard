import {
  FaChartPie,
  FaChartLine,
  FaUsers,
  FaCog,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden md:block fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-10">
        AnalyticsPro
      </h1>

      <ul className="space-y-4">

        <Link to="/">
          <li
            className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer ${
              location.pathname === "/"
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            <FaChartPie />
            Dashboard
          </li>
        </Link>

        <Link to="/analytics">
          <li
            className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer ${
              location.pathname === "/analytics"
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            <FaChartLine />
            Analytics
          </li>
        </Link>

        <Link to="/users">
          <li
            className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer ${
              location.pathname === "/users"
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            <FaUsers />
            Users
          </li>
        </Link>

        <Link to="/settings">
          <li
            className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer ${
              location.pathname === "/settings"
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            <FaCog />
            Settings
          </li>
        </Link>

      </ul>
    </div>
  );
}