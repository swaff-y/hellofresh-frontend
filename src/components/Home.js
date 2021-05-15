import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./home.css";

const Home = (props) => {
  return(
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center" data-test="component-home">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Food Recipes</h1>
          <p className="lead">
            A curated list of recipes for the best homemade meal and delicacies.
          </p>
          <hr className="my-4" />
          <div className="container">
            <div className="row">
              <div className="col">
                <Link
                  to="/recipes/1"
                  className="col btn btn-lg custom-button"
                  role="button"
                >
                  View Recipes
                </Link>
              </div>
              <div className="col" >
                <Link
                  to="/weeks/1"
                  className="col btn btn-lg custom-button"
                  role="button"
                >
                  View weekly Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
