import React from "react";
import { Filter, Search, SortAsc, ShoppingCart, MoreHorizontal } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">kindle</div>

      <div className="navbar-search">
        <Search className="icon search-icon" size={20} />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <div className="navbar-icons">
        <button className="icon-button"><Filter className="icon" /></button>
        <button className=" icon-button"><SortAsc className="icon meow" /></button>
        <button className=" icon-button"><ShoppingCart className="icon meow" /></button>
        <button className=" icon-button"><MoreHorizontal className="icon meow" /></button>
      </div>
    </nav>
  );
};

export default Navbar;