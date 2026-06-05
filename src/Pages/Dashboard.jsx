import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import StatCard from "../Components/StatCard";
import RevenueChart from "../Components/RevenueChart";
import UserGrowthChart from "../Components/UserGrowthChart";
import QuickStats from "../Components/QuickStats";
import TransactionsTable from "../Components/TransactionsTable";
export default function Dashboard() {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-slate-100 min-h-screen ml-64">

        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <div className="p-6">

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <StatCard
              title="Total Users"
              value="12,450"
              growth="+18%"
            />

            <StatCard
              title="Revenue"
              value="₹85,000"
              growth="+12%"
            />

            <StatCard
              title="Orders"
              value="1,250"
              growth="+9%"
            />

            <StatCard
              title="Profit"
              value="₹32,500"
              growth="+15%"
            />

          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
            <RevenueChart />
            <UserGrowthChart />
          </div>

          {/* Quick Stats */}
          <div className="mt-8">
            <QuickStats />
          </div>

          {/* Transactions Table */}
          <div className="mt-8">
            <TransactionsTable />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

  <div className="bg-white p-6 rounded-2xl shadow-lg">
    <h3 className="text-gray-500">
      Total Transactions
    </h3>

    <p className="text-3xl font-bold mt-2">
      1,248
    </p>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow-lg">
    <h3 className="text-gray-500">
      Completed
    </h3>

    <p className="text-3xl font-bold text-green-600 mt-2">
      986
    </p>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow-lg">
    <h3 className="text-gray-500">
      Pending
    </h3>

    <p className="text-3xl font-bold text-yellow-600 mt-2">
      262
    </p>
  </div>

</div>
          </div>

        </div>
      </div>

    </div>
  );
}