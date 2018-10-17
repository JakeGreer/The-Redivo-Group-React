import React from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";

const GetStarted = props => {
  return (
    <div className="container">
      <div className="row start-row">
        <div className="col-md-7 col-12">
          <div className="start-h-container">
            <h1 className="headerA">FIND YOUR NEW PROPERTY</h1>
            <h1 className="headerB">WITH THE REDIVO GROUP</h1>
          </div>
        </div>
        <div className="col-md-5 col-12">
          <div className="row start-buttons-div">
            <div className="col-md-6">
              <Link to="/properties">
                <button
                  id="startsearch"
                  src="../public/img/startsearch.png"
                  className="btn start-btn"
                >
                  Find Properties
                </button>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/contact">
                <button
                  id="startsearch"
                  src="../public/img/startsearch.png"
                  className="btn start-btn"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row" />
    </div>
  );
};
export default GetStarted;
