export default function TrafficSources() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        Traffic Sources
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Google</span>
          <span className="font-semibold">45%</span>
        </div>

        <div className="flex justify-between">
          <span>Facebook</span>
          <span className="font-semibold">25%</span>
        </div>

        <div className="flex justify-between">
          <span>Instagram</span>
          <span className="font-semibold">20%</span>
        </div>

        <div className="flex justify-between">
          <span>Direct</span>
          <span className="font-semibold">10%</span>
        </div>
      </div>
    </div>
  );
}