import React from "react";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";

function Layout({ children, headerTitle }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header title={headerTitle} />
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 ">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
