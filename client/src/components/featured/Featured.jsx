import React, { useState } from "react";
import "./Featured.scss";
import { Link, useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState()
  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate(`/gigs?search=${input}`)
  }
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try " AI "' onChange={(e)=>setInput(e.target.value)}/>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <Link to={"/gigs?cat=website"}>
              <button>Web Design</button>
            </Link>
            <Link to={"/gigs?cat=wordpress"}>
              <button>WordPress</button>
            </Link>
            <Link to={"/gigs?cat=design"}>
              <button>Logo Design</button>
            </Link>
            <Link to={"/gigs?cat=ai"}>
              <button>AI Services</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
