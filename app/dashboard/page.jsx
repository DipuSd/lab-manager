import { MdWavingHand } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FiAlertCircle } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import MetricCards from "./_components/MetricCards";
import RecentOrdersTable from "./_components/RecentOrdersTable";
import { getCurrentUser } from "@/lib/userDataFromDb";
import { getDashMetrics } from "@/lib/dashboardMetricData";
import { getRecentOrders } from "@/lib/recentOrderData";
export default async function Dashboard() {
  const [userDetails, dashboardMetricData, recentOrderData] = await Promise.all(
    [getCurrentUser("fullName"), getDashMetrics(), getRecentOrders()],
  );
  const iconMaps = {
    FiUsers,
    HiOutlineClipboardDocumentList,
    FiAlertCircle,
    FaRegCheckCircle,
  };
  const retrievedDashMetrics = dashboardMetricData?.dashboardMetrics.map(
    (metric) => {
      const Icon = iconMaps[metric.icon];

      return {
        ...metric,
        icon: <Icon size={20} />,
      };
    },
  );

  const dashboardMetrics = [
    {
      title: "Today\'s patients",
      result: 24,
      icon: <FiUsers size={20} />,
      color: "blue",
    },
    {
      title: "Pending orders",
      result: 8,
      icon: <HiOutlineClipboardDocumentList size={20} />,
      color: "yellow",
    },
    {
      title: "Awaiting review",
      result: 5,
      icon: <FiAlertCircle size={20} />,
      color: "orange",
    },
    {
      title: "Reports ready",
      result: 11,
      icon: <FaRegCheckCircle size={20} />,
      color: "green",
    },
  ];
  const dashMetricProp = retrievedDashMetrics || dashboardMetrics;

  const recentOrdersDetails = [
    {
      accessionNo: "#ML-2024-001",
      patient: "Fatima Rahman",
      test: "CBC",
      status: "Pending",
      priority: "STAT",
    },
    {
      accessionNo: "#ML-2024-002",
      patient: "Karim Hossain",
      test: "LFT",
      status: "In progress",
      priority: "Routine",
    },
    {
      accessionNo: "#ML-2024-003",
      patient: "Nadia Islam",
      test: "RFT",
      status: "Ready",
      priority: "Routine",
    },
  ];
  const recentOrdersProp =
    recentOrderData.recentOrdersDetails || recentOrdersDetails;
  return (
    <>
      <div className="h-screen bg-[#f1f5f9] text-black p-6 flex flex-col gap-6">
        {/* welcome message */}
        <div>
          <p className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
            Good morning, {userDetails.fullName},
            <span>
              <MdWavingHand size={18} className="text-orange-400" />
            </span>
          </p>
        </div>
        {/* metric cards */}
        <div>
          <MetricCards metricDetails={dashMetricProp} />
        </div>
        {/* recent orders table */}
        <div>
          <RecentOrdersTable orders={recentOrdersProp} />
        </div>
      </div>
    </>
  );
}
