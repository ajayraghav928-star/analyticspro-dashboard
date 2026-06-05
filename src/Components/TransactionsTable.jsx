export default function TransactionsTable() {
  const transactions = [
    {
      id: "#TRX001",
      user: "John Smith",
      date: "05 Jun 2026",
      amount: "₹12,500",
      status: "Completed",
    },
    {
      id: "#TRX002",
      user: "Sarah Johnson",
      date: "04 Jun 2026",
      amount: "₹8,200",
      status: "Pending",
    },
    {
      id: "#TRX003",
      user: "Michael Lee",
      date: "03 Jun 2026",
      amount: "₹15,700",
      status: "Completed",
    },
    {
      id: "#TRX004",
      user: "Emma Wilson",
      date: "02 Jun 2026",
      amount: "₹4,300",
      status: "Failed",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            Recent Transactions
          </h2>

          <p className="text-gray-500 text-sm">
            Monitor all payment activities
          </p>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Export Report
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left pb-3">ID</th>
            <th className="text-left pb-3">User</th>
            <th className="text-left pb-3">Date</th>
            <th className="text-left pb-3">Amount</th>
            <th className="text-left pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr key={item.id} className="border-b">

              <td className="py-4">
                {item.id}
              </td>

              <td>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                    {item.user.charAt(0)}
                  </div>

                  {item.user}
                </div>
              </td>

              <td>{item.date}</td>

              <td>{item.amount}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    item.status === "Completed"
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
  );
}