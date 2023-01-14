import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function MasterLayout({ userData, logout }) {
  return (
    <>
      <Navbar userData={userData} logout={logout} />
      <div className="container">
        <Outlet />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
      </div>
    </>
  );
}
