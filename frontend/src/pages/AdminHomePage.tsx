import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import useUser from "../hooks/useUser";

const AdminLandingPage = () => {
  const { data: user } = useUser();

  const navigate = useNavigate();

  const handleEncodeButton = () => {
    navigate("/encode");
  };
  const handleAddViolationButton = () => {
    navigate("/violatorslist");
  };
  const handleAddDriverButton = () => {
    navigate("/driverslist");
  };
  const handleRegistrationList = () => {
    navigate("/registration-list");
  };

  return (
    <div className="flex flex-col items-center bg-adminlanding-bg bg-cover bg-center sm:bg-cover md:bg-contain lg:bg-cover h-screen">
      <div>
        <AdminHeader />
      </div>

      <div className="flex space-x-2 p-5">
        <h1 className="text-3xl text-textgreen font-syke-bold">Welcome,</h1>
        <h1 className="text-3xl text-white font-syke-bold">
          {user?.user.first_name}
        </h1>
      </div>

      <div className="text-xl md:text-md sm-text-sm text-white font-syke-light text-center m-2 w-[3/12]">
        Your dashboard to monitor, manage, and maintain order within the university premises is ready.
        <p>Let's create a safer and more organized school environment together. </p>
      </div>

      <div className="font-syke-medium items-center text-3xl mt-10">
        <button
          className="transition-transform w-full max-w-md h-12 duration-300 hover:scale-105 text-white px-5 py-4 rounded-lg bg-buttongreen active:bg-colorhover font-syke-medium"
          onClick={handleEncodeButton}
        >
          Encode
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 font-syke-medium text-3xl gap-5 mt-6 w-full max-w-4xl">
        <button
          className="transition-transform duration-300 hover:scale-105 text-white px-5 py-4 rounded-md bg-buttongreen active:bg-colorhover font-syke-medium"
          onClick={handleAddDriverButton}
        >
          View Drivers
        </button>
        <button
          className="transition-transform duration-300 hover:scale-105 text-white px-5 py-4 rounded-md bg-buttongreen active:bg-colorhover font-syke-medium"
          onClick={handleAddViolationButton}
        >
          View Violators
        </button>
        <button
          className="transition-transform duration-300 hover:scale-105 text-white px-5 py-4 rounded-md bg-buttongreen active:bg-colorhover font-syke-medium"
          onClick={handleRegistrationList}
        >
          View Registration List
        </button>
      </div>
    </div>
  );
};

export default AdminLandingPage;
