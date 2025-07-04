import React, { useState } from "react";
import "./SideNavbar.css";
import { FaBook, FaStickyNote } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const SideNavbar = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaBook className="icon" />
        <div className="spam" onClick={() => setShow(!show)}>Library <FaChevronDown className="icon" /></div>
      </div>
        {show && <div className="show">
          <span>All Titles</span>
          <span>Books</span>
          <span>Comics</span>
          <span>Samples</span>
        </div>}
      <div className="sidebar-item">
        <FaStickyNote className="icon" />
        <span>Notes</span>
      </div>
    </div>
  );
};

export default SideNavbar;
