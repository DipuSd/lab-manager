import Link from "next/link";

export default function RecentOrdersTable({ orders }) {
  const statusStyles = {
    Pending: "bg-amber-50 text-amber-700 border border-amber-200/50",
    "In progress": "bg-blue-50 text-blue-700 border-blue-200/50",
    Ready: "bg-emerald-50 text-emerald-700 border border-emerald-200/50",
  };
  const priorityStyle = {
    STAT: "bg-red-50 text-red-500 font-semibold",
    Routine: "bg-slate-100 text-slate-500",
  };
  return (
    <>
      <div className="w-full bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden">
        {/* table header section */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2 className="text-base font-semibold text-slate-800">
            Recent orders
          </h2>
          {/* view all link */}
          <Link
            href="/dashboard/orders"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            View all
          </Link>
        </div>
        {/* table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm text-slate-600">
            <thead>
              <tr className="text-xs font-medium text-slate-400 tracking-wide border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-3.5 font-medium">Accession no.</th>
                <th className="px-6 py-3.5 font-medium">Patient</th>
                <th className="px-6 py-3.5 font-medium">Test</th>
                <th className="px-6 py-3.5 font-medium">Status</th>
                <th className="px-6 py-3.5 font-medium">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/80">
              {orders.map((order) => (
                <tr
                  key={order.accessionNo}
                  className="hover:bg-stale-50/40 transition-colors group"
                >
                  {/* Accession No */}
                  <td className="px-6 py-4 whitespcae-nowrap font-mono text-xs text-slate-500">
                    {order.accessionNo}
                  </td>
                  {/* patient name */}
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">
                    {order.patient}
                  </td>
                  {/* test type */}
                  <td className="px-6 py-4 whitespace-nowrap text-slate-600 uppercase font-medium">
                    {order.test}
                  </td>
                  {/* status badge */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide ${statusStyles[order.status] || ""}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  {/* priority badge */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs tracking-wide ${priorityStyle[order.priority] || ""}`}
                    >
                      {order.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
