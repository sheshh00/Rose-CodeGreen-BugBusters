import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import React, { useState } from "react";

const AddDriver = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCancelButton = () => {
    navigate("/encode");
  };

  const handleAddButton = () => {
    navigate("/admin");
  };
  return (
    <div className="flex flex-col items-center bg-login-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div className="w-full max-w-3xl mb-8 mt-5">
        <AdminHeader />
      </div>

      {currentStep === 1 && (
        <div>
          <div className="h-full w-full p-10 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-0">
            <div className="text-textgreen">
              <h1 className="text-2xl font-bold">Step 1: Add Driver</h1>
              <p>Enter the driver information here...</p>
            </div>

            <div className="mt-12">
              <div className="w-full mt-6">
                <label className="block text-white font-syke-regular mb-1">
                  Last Name :
                </label>
                <input
                  type="text"
                  className="text-left bg-zinc-500 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                  required
                />
              </div>

              <div className="w-full mt-6">
                <label className="block text-white font-syke-regular mb-1">
                  First Name :
                </label>
                <input
                  type="text"
                  className="text-left bg-zinc-500 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                  required
                />
              </div>

              <div className="w-full mt-6">
                <label className="block text-white font-syke-regular mb-1">
                  Middle Name (Optional) :
                </label>
                <input
                  type="text"
                  className="text-left bg-zinc-500 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <div className="h-full w-full p-10 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-0">
            <div className="text-textgreen">
              <h1 className="text-2xl font-bold">Step 2: More Information</h1>
              <p>Enter the driver information here...</p>
            </div>

            <div className="mt-12">
              <label className="block text-white font-syke-regular mb-1">
                Date of Birth :
              </label>

              <input
                type="date"
                className="text-left bg-zinc-500 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                required
              />
            </div>

            <div className="mt-6">
              <label className="block text-white font-syke-regular mb-1">
                Sex :
              </label>

              <select
                //  className="text-center bg-secondgrey w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                className="w-full bg-zinc-500 placeholder:text-slate-400 text-white text-sm border border-zinc-400 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                required
              >
                <option value="" disabled selected>
                  --Select--
                </option>

                <option value="male">Male</option>

                <option value="female">Female</option>

                <option value="other">Other</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="block text-white font-syke-regular mb-1">
                Driver Type :
              </label>

              <select
                //  className="text-center bg-secondgrey w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                className="w-full bg-zinc-500 placeholder:text-slate-400 text-white text-sm border border-zinc-400 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                required
              >
                <option value="" disabled selected>
                  --Select--
                </option>

                <option value="student">Student</option>

                <option value="staff">Staff</option>

                <option value="faculty">Faculty</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <div className="h-full w-full p-10 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-0">
            <div className="text-textgreen">
              <h1 className="text-2xl font-bold">
                Step 3: License Information
              </h1>
              <p>Enter the license information here...</p>
            </div>

            <div className="mt-20">
              <div className="w-full">
                <label className="block text-white font-syke-regular mb-1">
                  License Number :
                </label>
                <input
                  type="text"
                  className="text-left bg-zinc-500 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                  pattern="^\d+$"
                  required
                />
              </div>

              <div className="w-full mt-8">
                <label className="block text-white font-syke-regular mb-1">
                  License Expiration :
                </label>

                <input
                  type="date"
                  className="text-center bg-zinc-500 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div>
          <div className="h-full w-full p-10 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-0">
            <div className="text-textgreen">
              <h1 className="text-2xl font-bold">Step 4: Confirm Details</h1>
              <p>Confirm the following details if it is correct...</p>
            </div>

            <div className="text-white mt-10">
              <h1 className="mt-2">Last Name : </h1>
              <h1>First Name : </h1>
              <h1>Middle Name : </h1>
              <h1>Age : </h1>
              <h1>Sex : </h1>
              <h1>Email : </h1>
              <h1>License Number : </h1>
              <h1>License Expiration Date : </h1>
              <h1>Driver Type : </h1>
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        {currentStep === 1 && (
          <div className="text-center flex justify-center gap-10 p-10">
            <div>
              <button
                type="button"
                className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                onClick={handleCancelButton}
              >
                Cancel
              </button>
            </div>

            <div>
              <button
                type="button"
                className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {(currentStep === 2 || currentStep === 3) && (
          <div className="flex justify-center gap-12 p-10">
            <div>
              <button
                type="button"
                className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                onClick={handleBackClick}
              >
                Back
              </button>
            </div>

            <div>
              <button
                type="button"
                className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="flex justify-center gap-20 p-10">
            <div>
              <button
                type="button"
                className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                onClick={handleBackClick}
              >
                Back
              </button>
            </div>

            <div>
              <button
                type="button"
                className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                onClick={handleAddButton}
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddDriver;
