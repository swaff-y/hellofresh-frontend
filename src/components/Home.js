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
          <Link
            to="/recipes/1"
            className="btn btn-lg custom-button"
            role="button"
          >
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
