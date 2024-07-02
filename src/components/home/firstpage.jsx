import React from "react";
import { HomeCont, HomeMain, HomeNav } from "./homeStyle";
import { Link } from "react-router-dom";

const Firstpage = () => {
  return (
    <HomeCont>
      <HomeNav>
        <div className="nav-left">
          <h1>EduManSim</h1>
        </div>
        <div className="nav-right">
            <p>(90) 417-47-56</p>
            <div>ENG</div>
            <button>Log in</button>
        </div>
      </HomeNav>
      <HomeMain>
        <h1>A simple management system for education</h1>
        <Link to="/home">
          <button>Request Demo</button>
        </Link>
      </HomeMain>
    </HomeCont>
  );
};

export default Firstpage;
