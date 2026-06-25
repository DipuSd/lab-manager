import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        {/* info bar placeholder*/}
        <main>{children}</main>
      </div>
    </div>
  );
}
