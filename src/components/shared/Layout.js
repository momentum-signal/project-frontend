import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="md:flex">
      <Sidebar />
      <div>
        <Header />
        <main className="mt-16 md:mt-24 md:h-[calc(100vh-6rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
