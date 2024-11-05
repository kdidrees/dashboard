import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
