import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

export default function Users() {
  const users = [
    {
      name: "Ajay",
      email: "ajay@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Rahul",
      email: "rahul@gmail.com",
      role: "User",
      status: "Active",
    },
    {
      name: "Priya",
      email: "priya@gmail.com",
      role: "Manager",
      status: "Inactive",
    },
    {
      name: "Karthik",
      email: "karthik@gmail.com",
      role: "User",
      status: "Active",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen md:ml-64">
        <Navbar />

        <div className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">
                Users Management
              </h1>

              <p className="text-gray-500 mt-2">
                Manage and monitor all registered users.
              </p>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Add User
            </button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-gray-500">
                Total Users
              </h3>

              <p className="text-3xl font-bold mt-2">
                12,450
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-gray-500">
                Active Users
              </h3>

              <p className="text-3xl font-bold mt-2 text-green-600">
                10,280
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-gray-500">
                Inactive Users
              </h3>

              <p className="text-3xl font-bold mt-2 text-red-500">
                2,170
              </p>
            </div>

          </div>

          {/* Users Table */}
          <div className="bg-white rounded-2xl shadow-lg mt-8 overflow-hidden">

            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">
                User List
              </h2>
            </div>

            <table className="w-full">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="p-4 text-left">User</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Role</th>
                  <th className="p-4 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                          {user.name.charAt(0)}
                        </div>

                        {user.name}
                      </div>
                    </td>

                    <td className="p-4">
                      {user.email}
                    </td>

                    <td className="p-4">
                      {user.role}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
}