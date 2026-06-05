import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

export default function Settings() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen md:ml-64">
        <Navbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold">
            Settings
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your account and application preferences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold">
                Profile Settings
              </h3>

              <p className="text-gray-500 mt-2">
                Update your personal information.
              </p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                Edit Profile
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold">
                Security
              </h3>

              <p className="text-gray-500 mt-2">
                Change password and security options.
              </p>

              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                Manage Security
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold">
                Notifications
              </h3>

              <p className="text-gray-500 mt-2">
                Configure email and app notifications.
              </p>

              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg">
                Configure
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold">
                Appearance
              </h3>

              <p className="text-gray-500 mt-2">
                Customize dashboard appearance.
              </p>

              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
                Customize
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}