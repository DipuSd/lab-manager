import mongoose from "mongoose";

const dashboardMetricsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    result: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const dashboardSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    dashboardMetric: {
      type: [dashboardMetricsSchema],
      default: [],
    },
  },
  { timestamps: true },
);

dashboardSchema.index({ userId: 1 }, { unique: true });

const DashboardMetric =
  mongoose.models.DashboardMetric ||
  mongoose.model("DashboardMetric", dashboardSchema, "dashMetrics");

export default DashboardMetric;
