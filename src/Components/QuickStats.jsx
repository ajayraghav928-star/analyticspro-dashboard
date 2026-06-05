export default function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-gray-500">
          Revenue This Month
        </h3>

        <p className="text-3xl font-bold mt-2">
          ₹1,25,000
        </p>

        <p className="text-green-600 font-medium mt-2">
          ↑ 18% Growth
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-gray-500">
          Active Users
        </h3>

        <p className="text-3xl font-bold mt-2">
          8,420
        </p>

        <p className="text-blue-600 font-medium mt-2">
          ↑ 9% Growth
        </p>
      </div>
    </div>
  );
}