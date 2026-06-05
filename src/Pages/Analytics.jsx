import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import RevenueChart from "../Components/RevenueChart";
import TrafficSources from "../Components/TrafficSources";

export default function Analytics() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen md:ml-64">
        <Navbar />

        <div className="p-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold">
              Analytics Overview
            </h1>

            <p className="text-gray-500 mt-2">
              Track your business performance and growth metrics.
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-gray-500">
                Conversion Rate
              </h3>

              <p className="text-4xl font-bold mt-2">
                4.8%
              </p>

              <span className="text-green-600 font-medium">
                +12% this month
              </span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-gray-500">
                Website Visitors
              </h3>

              <p className="text-4xl font-bold mt-2">
                58K
              </p>

              <span className="text-green-600 font-medium">
                +18% this month
              </span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-gray-500">
                Bounce Rate
              </h3>

              <p className="text-4xl font-bold mt-2">
                32%
              </p>

              <span className="text-red-500 font-medium">
                -5% this month
              </span>
            </div>

          </div>

          {/* Revenue Chart */}
          <div className="mt-8">
            <RevenueChart />
          </div>

          {/* Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

            <TrafficSources />

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold mb-4">
                Sales Performance
              </h2>

              <p className="text-5xl font-bold text-slate-800">
                ₹2.4L
              </p>

              <p className="text-green-600 font-medium mt-2">
                +22% this month
              </p>

              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span>Target Completion</span>
                  <span>78%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full w-[78%]"></div>
                </div>
              </div>
            </div>

          </div>

          {/* Analytics Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-gray-500">
                Active Campaigns
              </h3>

              <p className="text-3xl font-bold mt-2">
                12
              </p>

              <p className="text-green-600 mt-2">
                +3 this week
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-gray-500">
                New Leads
              </h3>

              <p className="text-3xl font-bold mt-2">
                348
              </p>

              <p className="text-green-600 mt-2">
                +18%
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-gray-500">
                Conversion Value
              </h3>

              <p className="text-3xl font-bold mt-2">
                ₹1.2L
              </p>

              <p className="text-green-600 mt-2">
                +24%
              </p>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold mb-4">
                Top Performing Channels
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Google Ads</span>
                  <span className="font-bold">
                    ₹85,000
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Instagram</span>
                  <span className="font-bold">
                    ₹52,000
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Facebook</span>
                  <span className="font-bold">
                    ₹41,000
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>LinkedIn</span>
                  <span className="font-bold">
                    ₹28,000
                  </span>
                </div>

              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold mb-4">
                Monthly Goal Progress
              </h2>

              <p className="text-5xl font-bold">
                78%
              </p>

              <div className="w-full bg-gray-200 rounded-full h-4 mt-6">
                <div className="bg-blue-600 h-4 rounded-full w-[78%]"></div>
              </div>

              <p className="text-gray-500 mt-4">
                ₹78,000 of ₹100,000 achieved
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}