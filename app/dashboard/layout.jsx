import Sidebar from "./_components/Sidebar";
import Infobar from "./_components/Infobar";
import { getCurrentUser } from "@/lib/userDataFromDb";
export default async function DashboardLayout({ children }) {
  const userDetails = await getCurrentUser("fullName role");
  return (
    <div className="flex min-h-screen">
      <Sidebar userRole={userDetails.role} />
      <div className="flex flex-col flex-1">
        <Infobar userName={userDetails.fullName} />
        <main>{children}</main>
      </div>
    </div>
  );
}
