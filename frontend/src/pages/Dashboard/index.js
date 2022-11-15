import React from "react";
import DashboardLayout from "./layout/DashboardLayout";
import { HiOutlineDocumentText } from "react-icons/hi";
import SmallCard from "../../components/common/SmallCard";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="flex items-center  h-16 border-b-[0.5px] shadow-md border-primary">
          <h1 className="mx-6 text-xl font-bold text-primary">Dashboard</h1>
        </div>

        <div className="flex xl:mx-auto mt-6 mx-12 max-w-6xl xl:w-[1152px]">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
