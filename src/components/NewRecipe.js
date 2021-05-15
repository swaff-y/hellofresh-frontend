import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import {Helmet} from 'react-helmet';
import {Link} from "react-router-dom";
import "./newRecipe.css";
import api from '../api';

const NewRecipe = (props) => {
  let params = useParams();
  const pageLink = "/recipes/" + params.page;
  let history = useHistory();
  const [name,setName] = useState();
  const [ingredients,setIngredients] = useState();
  const [instruction,setInstruction] = useState();
  const [formDetails, setFormDetails] = useState({
  name:"",
  ingredients: "",
  instruction:""
})

  const onChangeName = (e) => {
    setName(e.target.value);
    const newFormDetails = formDetails;
    newFormDetails.name = e.target.value;
    setFormDetails(newFormDetails);
  }

  const onChangeIngredients = (e) => {
    setIngredients(e.target.value);
    const newFormDetails = formDetails;
    newFormDetails.ingredients = e.target.value;
    setFormDetails(newFormDetails);
  }

  const onChangeInstruction = (e) => {
    setInstruction(e.target.value);
    const newFormDetails = formDetails;
    newFormDetails.instruction = e.target.value;
    setFormDetails(newFormDetails);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    api.post(`recipes/create`,formDetails)
    .then((res)=>{
      history.push(`/recipes`);
    })
    .catch(err=>{
      console.warn(err);
    })
  }

  return(
    <div className="container mt-5" data-test="componenet-newRecipe">
      <Helmet>
        <title>Add a new recipe</title>
        <meta name="description" content="Hello Fresh New Recipes" />
      </Helmet>
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Add a new recipe to our awesome recipe collection.
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="recipeName">Recipe name</label>
              <input
                type="text"
                name="name"
                id="recipeName"
                className="form-control"
                required
                onChange={onChangeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipeIngredients">Ingredients</label>
              <input
                type="text"
                name="ingredients"
                id="recipeIngredients"
                className="form-control"
                required
                onChange={onChangeIngredients}
              />
              <small id="ingredientsHelp" className="form-text text-muted">
                Separate each ingredient with a comma.
              </small>
            </div>
            <label htmlFor="instruction">Preparation Instructions</label>
            <textarea
              className="form-control"
              id="instruction"
              name="instruction"
              rows="5"
              required
              onChange={onChangeInstruction}
            />
            <button type="submit" className="btn custom-button mt-3">
              Create Recipe
            </button>
            <Link to={pageLink} className="btn btn-link mt-3">
              Back to recipes
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewRecipe;
