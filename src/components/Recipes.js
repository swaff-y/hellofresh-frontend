import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import {Helmet} from 'react-helmet';
import {Link} from "react-router-dom";
import RecipesRender from './RecipesRender'
import api from '../api';
import "./recipes.css";

const Recipes = (props) => {
  const params = useParams();
  let history = useHistory();
  let currentPage = params.page;
  const [recipes, setRecipes] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(()=>{
    api.get(`recipes/index/${params.page}`)
    .then((res)=>{
      // console.log(res.data);
      setRecipes(res.data);
      setPages(res.data[0].total_pages);
      // checkPageNumber()
    })
    .catch(err=>{
      console.warn(err);
    })
  },[params])

  const next = () => {
    if((parseInt(currentPage) + 1) <= pages){
      return "/recipes/" + (parseInt(currentPage) + 1)
    }
    return "/recipes/" + (parseInt(currentPage))
  }
  const previous = () => {
    if((parseInt(currentPage) - 1) !== 0){
      return "/recipes/" + (parseInt(currentPage) - 1)
    }
    return "/recipes/" + (parseInt(currentPage))
  }

  // const checkPageNumber = () => {
  //   if(currentPage > pages){
  //     currentPage = 1;
  //     history.push(`/recipes/1`)
  //   }
  // }


  return(
    <div className="" data-test="component-recipes">
      <Helmet>
        <title>Hello Fresh - Recipes</title>
        <meta name="description" content="Hello Fresh Recipes" />
      </Helmet>
      <section className="jumbotron jumbotron-fluid text-center">
      <div className="container py-5">
        <h1 className="display-4">Recipes for every occasion</h1>
        <p className="lead text-muted">
          We’ve pulled together our most popular recipes, our latest
          additions, and our editor’s picks, so there’s sure to be something
          tempting for you to try.
        </p>
      </div>
      </section>
      <div className="py-5">
      <main className="container">
        <div className="text-right mb-3">
          <Link to={"/recipe/" + params.page} className="btn custom-button">
            Create New Recipe
          </Link>
        </div>
        <RecipesRender
          recipes={recipes}
          currentPage={parseInt(currentPage)}
          params={params}
          type="display"
        />
        <div className="recipes__pagination">
        <Link to={previous} className="btn btn-link">
          Previous Page
        </Link>
        <span>Showing Page {currentPage} of {pages}</span>
        <Link to={next} className="btn btn-link">
          Next Page
        </Link>
        </div>
        <Link to="/" className="btn btn-link">
          Home
        </Link>
      </main>
      </div>
    </div>
  )
}

export default Recipes;
