import { IoFlaskOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import RegisterForm from "@/components/register/RegisterForm";
export default function Register() {
  return (
    <>
      {/* main container */}
      <div className="bg-[#f1f5f9] w-screen h-screen flex items-center justify-center text-black">
        {/* register container */}
        <div className="bg-white rounded-xl px-8 py-10 flex flex-col space-y-8 shadow-sm">
          {/* header and logo section */}
          <div className="flex flex-col space-y-4 items-center">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-blue-500 p-1">
                <IoFlaskOutline size={24} className="text-white" />
              </div>
              <h1 className="font-semibold tracking-tighter text-xl">MedLab</h1>
            </div>
            <h1 className="font text-lg">Create new Staff account</h1>
          </div>
          {/* horizontal line */}
          <hr className="text-gray-300" />
          {/* info card */}
          <div className="flex bg-blue-100 border-l-2 border-blue-500 p-2 text-blue-500 items-center justify-center gap-2">
            <div>
              <IoMdInformationCircleOutline size={19} />
            </div>
            <div>
              <p className="text-sm">
                Staff accounts are created by Administrator only. Ensure all
                details are accurate before submitting{" "}
              </p>
            </div>
          </div>
          {/* account creation form section */}
          <div>
            <RegisterForm />
          </div>
          <hr className="text-gray-300" />
        </div>
      </div>
    </>
  );
}
