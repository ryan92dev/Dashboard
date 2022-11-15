import React from "react";

const ProfileOptions = () => {
  return (
    <>
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary"></div>
      <div className="flex-col hidden ml-2 leading-tight md:flex text-primary">
        <p className="mb-1 text-sm font-semibold tracking-wide">John Doe</p>
        <p className="text-xs text-slate-300">Full Stack Developer</p>
      </div>
    </>
  );
};

export default ProfileOptions;
