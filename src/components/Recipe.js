import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "./recipe.css";
import api from '../api';

const Recipe = (props) => {
  let params = useParams();
  const [recipe, setRecipe] = useState({ingredients:""});

  useEffect(()=>{
    api.get(`recipes/show/${params.id}`)
    .then((res)=>{
      console.log(res.data);
      const data = res.data
      setRecipe(data);
    })
    .catch(err=>{
      console.warn(err);
    })
  },[])

  const addHtmlEntities = (str) => {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  // console.log("the recipe:", recipe.ingredients.split(", "));

  const recipeInstruction = addHtmlEntities(recipe.instruction);

  return(
    <div className="" data-test="component-recipe">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <img
          src={recipe.image}
          alt={`${recipe.name} image`}
          className="img-fluid position-absolute"
        />
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {
            recipe.name
          }
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group">
              <h5 className="mb-2">Ingredients</h5>
              {
                recipe.ingredients.length > 0
                ?
                recipe.ingredients.split(",").map((ingredient, index) => (
                  <li key={index} className="list-group-item">
                  {ingredient}
                  </li>
                ))
                :
                <p>No ingredients available</p>
              }
            </ul>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h5 className="mb-2">Preparation Instructions</h5>
            <div
              dangerouslySetInnerHTML={{
                __html: `${recipeInstruction}`
              }}
            />
          </div>
          <div className="col-sm-12 col-lg-2">
            <button type="button" className="btn btn-danger">
              Delete Recipe
            </button>
          </div>
        </div>
        <Link to="/recipes" className="btn btn-link">
          Back to recipes
        </Link>
      </div>
    </div>
  )
}

export default Recipe;
