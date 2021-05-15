import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import api from '../api';
import "./recipes.css";

const Recipes = (props) => {
  const params = useParams();
  const currentPage = params.page;
  const [recipes, setRecipes] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(()=>{
    api.get(`recipes/index/${params.page}`)
    .then((res)=>{
      // console.log(res.data);
      setRecipes(res.data);
      setPages(res.data[0].total_pages);
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

  return(
    <div className="" data-test="component-recipes">
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
          <Link to="/recipe" className="btn custom-button">
            Create New Recipe
          </Link>
        </div>
        <div className="row">
          {
              recipes.length > 0
              ?
              recipes.map((recipe, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card mb-4">
                    <img
                      src={recipe.image}
                      className="card-img-top"
                      alt={`${recipe.name} image`}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{recipe.name}</h5>
                      <Link to={`/recipe/${recipe.id}`} className="btn custom-button">
                        View Recipe
                      </Link>
                    </div>
                  </div>
                </div>
              ))
              :
              <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                  No recipes yet. Why not <Link to="/new_recipe">create one</Link>
                </h4>
              </div>
          }
        </div>
        <div className="recipes__pagination">
        <Link to={previous} className="btn btn-link">
          Prevoius Page
        </Link>
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
