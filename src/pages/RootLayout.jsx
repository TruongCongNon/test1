import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<p>Loading</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default RootLayout;
