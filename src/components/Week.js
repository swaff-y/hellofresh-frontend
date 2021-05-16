import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import {Helmet} from 'react-helmet';
import {Link} from "react-router-dom";
import RecipesRender from './RecipesRender'
import "./week.css";
import api from '../api';

const Week = (props) => {
  let params = useParams();
  const page = params.page;
  let history = useHistory();
  const [week, setWeek] = useState({ingredients:""});
  const [recipes, setRecipes] = useState([]);
  const title = `${week.name} for week ${week.number}`;
  const description = `${week.name} for week ${week.number}`;

  useEffect(()=>{
    api.get(`weeks/show/${params.id}`)
    .then((res)=>{
      // console.log(res.data);
      setWeek(res.data);

      api.get(`recipes/week/${params.id}`)
      .then((res)=>{
        // console.log(res.data);
        setRecipes(res.data);
      })
      .catch(err=>{
        console.warn(err);
      })
    })
    .catch(err=>{
      console.warn(err);
    })

  },[])

  // console.log(week.id);

  const addHtmlEntities = (str) => {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  const deleteWeek = () => {
    api.delete(`weeks/destroy/${params.id}`)
    .then((res)=>{
      history.push(`/weeks/${params.page}`);
    })
    .catch(err=>{
      console.warn(err);
    })
  }

  // console.log("the recipe:", recipe.ingredients.split(", "));

  // const recipeInstruction = addHtmlEntities(recipe.instruction);

  return(
    <div className="" data-test="component-recipe">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <img
          src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1621119593/food_x2belo.jpg"
          alt={`${week.name} image`}
          className="img-fluid position-absolute"
        />
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {week.name} for week {week.number}
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-7">
            <h5 className="mb-2">Recipes</h5>
            <div className="container">
            <RecipesRender
              recipes={recipes}
              currentPage={1}
              params={{page:"1"}}
              type="menu"
            />
            </div>
          </div>
          <div className="col-sm-12 col-lg-2">
            <button type="button" className="btn btn-danger" onClick={deleteWeek}>
              Delete week
            </button>
          </div>
        </div>
        <Link to={`/weeks/${page}`} className="btn btn-link">
          Back to weeks
        </Link>
      </div>
    </div>
  )
}

export default Week;
