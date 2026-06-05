export default function Navbar() {
  return (
    <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center border-b">

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-gray-500 text-sm">
          Welcome back, Admin 👋
        </p>
      </div>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="border px-4 py-2 rounded-xl w-72"
        />

        <button className="bg-gray-100 p-3 rounded-xl hover:bg-gray-200 transition">
          🔔
        </button>

        <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            A
          </div>

          <div>
            <h4 className="font-semibold text-sm">
              Admin
            </h4>

            <p className="text-xs text-gray-500">
              Super Admin
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}