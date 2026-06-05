export default function StatCard({
  title,
  value,
  growth = "+12%",
}) {
  return (
    <div
      className="
        bg-white
        p-6
        rounded-2xl
        shadow-lg
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        border
        border-gray-100
      "
    >
      <h3 className="text-gray-500 text-sm font-medium">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>

      <div className="mt-3">
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
          {growth}
        </span>
      </div>
    </div>
  );
}