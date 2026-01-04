import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function AppLayouts() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Page Content */}
      <main>
        <Outlet />  {/* 🔑 renders child routes */}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
