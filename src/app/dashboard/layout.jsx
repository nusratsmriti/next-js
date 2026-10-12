import Link from 'next/link';
import React from 'react'

export default function dashboardLayout({children}) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <div>
          <p>Dashboard Layout common parts</p>
          {children}
        </div>

        <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            {" "}
            <Link href="dashboard/profiles"> Profiles</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
