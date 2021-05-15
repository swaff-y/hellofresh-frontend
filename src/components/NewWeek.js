import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import {Helmet} from 'react-helmet';
import {Link} from "react-router-dom";
import "./newWeek.css";
import api from '../api';

const NewWeek = (props) => {
  let params = useParams();
  const pageLink = "/weeks/" + params.page;
  let history = useHistory();
  const [name,setName] = useState();
  const [lastWeek,setLastWeek] = useState();
  const [number,setNumber] = useState();
  const [formDetails, setFormDetails] = useState({
    name:"",
    number: ""
  })

  useEffect(()=>{
    api.get(`week/last`)
    .then((res)=>{
      const newFormDetails = formDetails;
      newFormDetails.number = res.data.number + 1;
      setFormDetails(newFormDetails);
    })
    .catch((err)=>{
      console.warn(err);
    })
  },[])

  const onChangeName = (e) => {
    setName(e.target.value);
    const newFormDetails = formDetails;
    newFormDetails.name = e.target.value;
    setFormDetails(newFormDetails);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    api.post(`weeks/create`,formDetails)
    .then((res)=>{
      history.push(`/weeks/1`);
    })
    .catch(err=>{
      console.warn(err);
    })
  }

  return(
    <div className="container mt-5" data-test="component-newWeek">
      <Helmet>
        <title>Add a new week</title>
        <meta name="description" content="Hello Fresh New weeks" />
      </Helmet>
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Add a new week so you can add awsome recipes to your menu.
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="weekName">Week name</label>
              <input
                type="text"
                name="name"
                id="weekName"
                className="form-control"
                required
                onChange={onChangeName}
              />
            </div>

            <button type="submit" className="btn custom-button mt-3">
              Create Week
            </button>
            <Link to={pageLink} className="btn btn-link mt-3">
              Back to weeks
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewWeek;
