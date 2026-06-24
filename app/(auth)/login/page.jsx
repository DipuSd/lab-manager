import { IoFlaskOutline } from "react-icons/io5";

export default function Login() {
  return (
    <>
      {/* main container */}
      <div className="flex h-screen w-screen">
        {/* left banner */}
        <div className="h-full w-1/2 bg-[#000117]">
          {/* logos and header */}
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <div className="bg-blue-500 rounded-lg p-3">
              <IoFlaskOutline size={30} />
            </div>
            <h1 className="font-semibold text-2xl">MedLab</h1>
            <p className="font-semibold opacity-60">
              Labratory Management System
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
