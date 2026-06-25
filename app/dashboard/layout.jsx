import Sidebar from "./_components/Sidebar";
import Infobar from "./_components/Infobar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Infobar />
        <main>{children}</main>
      </div>
    </div>
  );
}
