export default function RecentTransactions() {
  const transactions = [
    {
      id: "#1001",
      customer: "John Doe",
      date: "04 Jun 2026",
      amount: "₹2,500",
      status: "Paid",
    },
    {
      id: "#1002",
      customer: "Sarah",
      date: "04 Jun 2026",
      amount: "₹1,800",
      status: "Pending",
    },
    {
      id: "#1003",
      customer: "Michael",
      date: "03 Jun 2026",
      amount: "₹3,200",
      status: "Paid",
    },
    {
      id: "#1004",
      customer: "Emma",
      date: "03 Jun 2026",
      amount: "₹900",
      status: "Failed",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          Recent Transactions
        </h2>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="text-left py-4">Transaction ID</th>
              <th className="text-left py-4">Customer</th>
              <th className="text-left py-4">Date</th>
              <th className="text-left py-4">Amount</th>
              <th className="text-left py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="py-4 font-medium">
                  {item.id}
                </td>

                <td className="py-4">
                  {item.customer}
                </td>

                <td className="py-4">
                  {item.date}
                </td>

                <td className="py-4 font-semibold">
                  {item.amount}
                </td>

                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}