import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";

function AllTabs({ username }) {
  return (
    <div className="all-tabs">
      <section className="navigation-links">
        <NavLink to={`/${username}`}>
          <BsBook /> <span>Overview</span>
        </NavLink>
        <NavLink to={`/${username}/repos`}>
          <BiGitRepoForked />
          <span>Repos</span>
        </NavLink>
      </section>
      <section className="contents">
        <Outlet />
      </section>
    </div>
  );
}

export default AllTabs;
