import { IoFlaskOutline } from "react-icons/io5";
import LoginForm from "@/components/login/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <>
      {/* main container */}
      <div className="flex h-screen w-screen">
        {/* left banner */}
        <div className="h-full w-[40%] bg-[#00032F] p-4 flex flex-col">
          {/* logos and header */}
          <div className="flex flex-col items-center justify-center h-full space-y-3">
            <div className="bg-blue-500 rounded-lg p-3">
              <IoFlaskOutline size={50} />
            </div>
            <h1 className="font-semibold text-2xl">MedLab</h1>
            <p className="opacity-60 text-sm">Labratory Management System</p>
          </div>
          {/* bottom message */}
          <div className="border-t border-white/50 text-center py-2 text-sm mb-20 mx-5">
            <p className="opacity-60">Accessible by authorized staff only</p>
          </div>
        </div>
        {/* right side panel*/}
        <div
          className="flex flex-col items-center justify-center text-black flex-1 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          {/* form container */}
          <div className="space-y-5 rounded-xl shadow-sm px-6 py-10 bg-[#FAF9F6]">
            <div className="spacey-y-2">
              <h1 className="text-3xl font-semibold">Welcome back</h1>
              <p className="text-sm text-gray-500">Sign in to your account</p>
            </div>
            {/* login form */}
            <LoginForm />
            <div className="text-center text-xs text-gray-500">
              No account?{" "}
              <Link
                href={"/register"}
                className="text-blue-500 hover:underline hover:decoration-blue-500"
              >
                Register now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
