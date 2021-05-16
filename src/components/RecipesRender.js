import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import DropdownButton from './DropdownButton';
import "./recipesRender.css";
import api from '../api';

const RecipesRender = (props) => {

  return(
    <div className="row" data-test="component-recipesRender">
    {
        props.recipes.length > 0
        ?
        props.recipes.map((recipe, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={`${recipe.name} image`}
              />
              <div className="card-body">
                {
                  props.type === "menu"
                  ?
                  <h5 className="card-title">{recipe.name} - Day 1</h5>
                  :
                  <h5 className="card-title">{recipe.name}</h5>
                }
                <div className="container">
                  <div className="row">
                    {
                      props.type === "menu"
                      ?
                      <Link to={`/recipe/${recipe.id}/${props.currentPage}`} className="btn custom-button col">
                        View Recipe
                      </Link>
                      :
                      <div className="container px-1">
                        <div className="row g-1">
                          <Link to={`/recipe/${recipe.id}/${props.currentPage}`} className="btn custom-button col recipesRender__button">
                            View Recipe
                          </Link>
                          <DropdownButton recipeId={recipe.id}/>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
        :
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
          <h4>
            No recipes yet. Why not <Link to={"/recipe/" + props.params.page}>create one</Link>
          </h4>
        </div>
    }
    </div>
  )
}

RecipesRender.propTypes = {
  recipes: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  params: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default RecipesRender;
