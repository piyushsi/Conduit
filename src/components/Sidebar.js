import React from "react";
import "../Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="wrapper">
      <input className="hidden-trigger" id="toogle" type="checkbox" />
      <label className="circle" htmlFor="toogle">
        <img
          src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/btw_ic_speeddial_white_24dp_2x.png"
          alt=""
        />
      </label>

      <div className="subs">
        <button className="button sub-circle">
          <input
            className="hidden-sub-trigger"
            id="sub1"
            type="radio"
            name="sub-circle"
            value="1"
          />
          <label htmlFor="sub1"></label>
        </button>
        <button className="button sub-circle">
          <input
            className="hidden-sub-trigger"
            id="sub2"
            type="radio"
            name="sub-circle"
            value="1"
          />
          <label htmlFor="sub2"></label>
        </button>
        <button className="button sub-circle">
          <input
            className="hidden-sub-trigger"
            id="sub3"
            type="radio"
            name="sub-circle"
            value="1"
          />
          <label htmlFor="sub3"></label>
        </button>
        <button className="button sub-circle">
          <input
            className="hidden-sub-trigger"
            id="sub4"
            type="radio"
            name="sub-circle"
            value="1"
          />
          <label htmlFor="sub4"></label>
        </button>
        <button className="button sub-circle">
          <input
            className="hidden-sub-trigger"
            id="sub5"
            type="radio"
            name="sub-circle"
            value="1"
          />
          <label htmlFor="sub5"></label>
        </button>
        <button className="button sub-circle">
          <input
            className="hidden-sub-trigger"
            id="sub6"
            type="radio"
            name="sub-circle"
            value="1"
          />
          <label htmlFor="sub6"></label>
        </button>
        <button className="button sub-circle">
          <input
            className="hidden-sub-trigger"
            id="sub7"
            type="radio"
            name="sub-circle"
            value="1"
          />
          <label htmlFor="sub7"></label>
        </button>
        <button className="button sub-circle">
          <input
            className="hidden-sub-trigger"
            id="sub8"
            type="radio"
            name="sub-circle"
            value="1"
          />
          <label htmlFor="sub8"></label>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
