import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import style from "../../styles/mainContent.module.css";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={style.mainContainer}>
        <div className="row h-100 ">
          <div className="col-md-2 ">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <div className={style.mainCard}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
