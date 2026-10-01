import React, { useState, useEffect } from "react";

export default function Navbar() {
  // Theme State Manage (LocalStorage theke pichoner choice retrieve korbe)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  // Theme change hole HTML element-e data-theme update korbe
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle Function
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const links = (
    <>
      <li className="m-2 cursor-pointer">Home</li>
      <li className="m-2 cursor-pointer">About</li>
    </>
  );

  return (
    <div className="max-lg:collapse bg-base-200 lg:mb-14 shadow-sm w-full rounded-md sticky top-0 z-50">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <button className="btn btn-ghost text-xl font-bold text-primary">
            Photo Gallery
          </button>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">{links}</ul>
        </div>

        <div className="navbar-end gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-32 sm:w-64"
          />

          {/* DaisyUI Theme Controller (Sun/Moon Toggle) */}
          <label className="swap swap-rotate btn btn-ghost btn-circle">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "dark"}
            />

            {/* Sun Icon (Light Mode) */}
            <svg
              className="swap-off fill-current w-6 h-6 text-amber-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,3.51,6.34l.71.71A1,1,0,0,0,5.64,7.05ZM12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm7.05-10.35a1,1,0,0,0-1.41,0l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,19.05,5.65ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-2.36,6a1,1,0,0,0-1.41,0l-.71.71a1,1,0,0,0,1.41,1.41l.71-.71A1,1,0,0,0,18.64,17Z" />
            </svg>

            {/* Moon Icon (Dark Mode) */}
            <svg
              className="swap-on fill-current w-6 h-6 text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,2.45-5.18,1,1,0,0,0-.34-1.63,10,10,0,1,0,10.45,14.32A1,1,0,0,0,21.64,13Z" />
            </svg>
          </label>
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu font-medium">{links}</ul>
      </div>
    </div>
  );
}
