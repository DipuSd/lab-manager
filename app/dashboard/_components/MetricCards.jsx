export default function MetricCards({ metricDetails }) {
  const metricStyles = {
    blue: {
      icon: "bg-blue-100 text-blue-500",
    },
    yellow: {
      icon: "bg-yellow-100 text-yellow-500",
    },
    orange: {
      icon: "bg-orange-100 text-orange-500",
    },
    green: {
      icon: "bg-green-100 text-green-500",
    },
  };
  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
        {metricDetails.map((detail) => (
          <div
            key={detail.title}
            className="flex flex-col gap-2 p-4 bg-white flex-1 rounded-xl shadow-sm border border-slate-300"
          >
            {/* icon section */}
            <div
              className={`p-2 rounded-lg ${metricStyles[detail.color].icon} w-fit`}
            >
              {detail.icon}
            </div>
            {/* title  */}
            <p className="text-xs text-gray-500">{detail.title}</p>
            {/* result */}
            <h1 className="text-3xl text-black font-semibold">
              {detail.result}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}
