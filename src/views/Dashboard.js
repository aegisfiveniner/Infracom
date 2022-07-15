import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { PieChart } from "../components/PieChart";

function Dashboard({ items }) {
  return (
    <div className="h-screen w-screen">
      <div className="flex w-full  h-full">
        <Sidebar />
        <div className="w-full bg-[#d8f5f9] overflow-y-auto">
          <div className="w-[90%] h-100 mt-10 mx-auto shadow rounded-lg p-5 bg-[#bcf1ec] ">
            <div className="w-[30%]">
              <PieChart items={items} />
            </div>
          </div>
          <div className="w-[90%] h-100 mt-10 mx-auto shadow rounded-lg p-5 bg-[#bcf1ec] ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
