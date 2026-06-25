export default function MetricCards({ metricDetails }) {
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
              className={`p-2 rounded-lg bg-${detail.color}-100 text-${detail.color}-500 w-fit`}
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
