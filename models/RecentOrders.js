import mongoose from "mongoose";

const recentOrderSchema = new mongoose.Schema(
  {
    accessionNo: {
      type: String,
      required: true,
    },
    patient: {
      type: String,
      required: true,
    },
    test: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const recentOrdersSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    recentOrderDetails: {
      type: [recentOrderSchema],
      default: [],
    },
  },
  { timestamps: true },
);

recentOrdersSchema.index({ userId: 1 }, { unique: true });

const RecentOrder =
  mongoose.models.RecentOrder ||
  mongoose.model("RecentOrder", recentOrdersSchema, "recentOrders");

export default RecentOrder;
