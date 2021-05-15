import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import {Helmet} from 'react-helmet';
import {Link} from "react-router-dom";
import api from '../api';
import "./weeks.css";

const Weeks = (props) => {
  const params = useParams();
  let history = useHistory();
  let currentPage = params.page;
  const [weeks, setWeeks] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(()=>{
    api.get(`weeks/index/${params.page}`)
    .then((res)=>{
      // console.log(res.data);
      setWeeks(res.data);
      setPages(res.data[0].total_pages);
      // checkPageNumber()
    })
    .catch(err=>{
      console.warn(err);
    })
  },[params])

  const next = () => {
    if((parseInt(currentPage) + 1) <= pages){
      return "/weeks/" + (parseInt(currentPage) + 1)
    }
    return "/weeks/" + (parseInt(currentPage))
  }
  const previous = () => {
    if((parseInt(currentPage) - 1) !== 0){
      return "/weeks/" + (parseInt(currentPage) - 1)
    }
    return "/weeks/" + (parseInt(currentPage))
  }

  // const checkPageNumber = () => {
  //   if(currentPage > pages){
  //     currentPage = 1;
  //     history.push(`/recipes/1`)
  //   }
  // }


  return(
    <div className="" data-test="component-weeks">
      <Helmet>
        <title>Hello Fresh - Weekly Menu</title>
        <meta name="description" content="Hello Fresh Weekly menu" />
      </Helmet>
      <section className="jumbotron jumbotron-fluid text-center">
      <div className="container py-5">
        <h1 className="display-4">A weekly menu based on your selections</h1>
        <p className="lead text-muted">
          We've added your favourite recipes to your weekly menus. Check them out below.
        </p>
      </div>
      </section>
      <div className="py-5">
      <main className="container">
        <div className="text-right mb-3">
          <Link to={"/week/" + params.page} className="btn custom-button">
            Create New Week
          </Link>
        </div>
        <div className="row">
          {
              weeks.length > 0
              ?
              weeks.map((week, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">{week.name}</h5>
                      <p className="card-text">The menu for week {week.number}</p>
                      <Link to={`/week/${week.id}/${currentPage}`} className="btn custom-button">
                        View Week
                      </Link>
                    </div>
                  </div>
                </div>
              ))
              :
              <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                  No menus yet. Why not <Link to={"/week/" + params.page}>create one</Link>
                </h4>
              </div>
          }
        </div>
        <div className="weeks__pagination">
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

export default Weeks;
