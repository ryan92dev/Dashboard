import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import SearchBox from "../../../components/menu/SearchBox";
import ToggleThemeButton from "../../../components/menu/ToggleThemeButton";
import MailButton from "../../../components/menu/MailButton";
import NotificationButton from "../../../components/menu/NotificationButton";
import SidebarMenu from "../../../components/sidebar";
import ProfileOptions from "../../../components/menu/ProfileOptions";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleToggleSidebar = () => {
    if (subMenuOpen) {
      setSubMenuOpen(false);

      setTimeout(() => {
        setSidebarOpen(!sidebarOpen);
      }, 1500);
    } else {
      setSidebarOpen(!sidebarOpen);
    }
  };

  return (
    <div className="w-full h-screen bg-primary">
      <div className="flex items-center h-16 border-b min-h-16 border-primary ">
        <div className="flex items-center flex-none w-64">
          <p className="ml-6 text-2xl font-bold text-primary">Admin Panel</p>
        </div>

        {/* Menu Bar */}
        <div className="flex items-center flex-1 mr-6 md:justify-between">
          <div className="flex items-center justify-center flex-none ">
            <div className="flex items-center max-w-64">
              <button
                onClick={handleToggleSidebar}
                className="text-2xl text-primary"
              >
                <AiOutlineMenuFold />
              </button>
              <div className="hidden ml-4 lg:block ">
                {/* Search Box */}
                <SearchBox />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-end flex-1 h-full gap-4 ">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary">
              <ToggleThemeButton />
            </div>
            <div className="items-center justify-center hidden w-10 h-10 rounded-full md:flex bg-secondary">
              <MailButton />
            </div>
            <div className="items-center justify-center hidden w-10 h-10 rounded-full md:flex bg-secondary">
              <NotificationButton />
            </div>

            <div className="flex items-center">
              <ProfileOptions />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-none h-[calc(100%-64px)]">
        <div className="flex flex-none w-full">
          <SidebarMenu
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            subMenuOpen={subMenuOpen}
            setSubMenuOpen={setSubMenuOpen}
          />

          <div className="flex-1 h-full overflow-hidden ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
