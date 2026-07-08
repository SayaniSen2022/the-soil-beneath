import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-full items-center justify-center px-4 pt-[10.5rem] md:pt-[7rem] pb-0">
      <Outlet/>
    </div>
  )
};

export default AuthLayout;