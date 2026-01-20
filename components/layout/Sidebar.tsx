"use client";

import { useState } from "react";
import "./sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <h2 className="logo">Agree<span>Track</span></h2>
      </header>

      {/* Sidebar */}
      <nav className={`sidebar ${open ? "open" : ""}`}>
        <div className="menu-items"><i className="fa-solid fa-grip"></i><a href="#">Dashboard</a>
        </div>
        <div className="menu-items"><i className="fa-regular fa-file-lines"></i><a href="#">Blueprint</a>
        </div>
        <div className="menu-items"><i className="fa-regular fa-square-plus"></i><a href="#">Create Contract</a>
        </div>
      </nav>

      {/* Main content */}
      <main className="content">
        <h1>Welcome Back GT!</h1>
      </main>
    </div>
  );
}
