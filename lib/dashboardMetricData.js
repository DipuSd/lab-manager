import { getUser } from "./userFromCookie";
import { connectDB } from "./mongodb";
import DashboardMetric from "@/models/DashMetrics";

export async function getDashMetrics() {
  const session = await getUser();

  await connectDB();

  const dashboardMetricDetails = await DashboardMetric.findOne({
    userId: session.publicID,
  }).lean();

  return dashboardMetricDetails;
}
