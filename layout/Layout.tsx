import { Outlet } from "react-router";
import React from "react";
import StickyHeader from "../sections/Header";
import MobileFooterNav from "../sections/Header";

function Layout() {
  return (
    <>
      <MobileFooterNav />
      <Outlet />
    </>
  );
}

export default Layout;
