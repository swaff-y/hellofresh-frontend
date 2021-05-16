import React, {useEffect, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import "./dropdownButton.css";
import api from '../api';
import { useHistory } from "react-router-dom";

const DropdownButton = (props) => {
  let history = useHistory();
  const [weeks,setWeeks] = useState([])
  useEffect(()=>{
    api.get(`weeks/all`)
    .then((res)=>{
       // console.log(res.data);
      setWeeks(res.data);
    })
    .catch(err=>{
      console.warn(err);
    })
  },[])

  const handleClick = (weekId,recipeId) => {
    api.post(`assign_recipe/${weekId}/${recipeId}`)
    .then((res)=>{
       // console.log(res.data);
      history.push(`/week/${weekId}/1`);
    })
    .catch(err=>{
      console.warn(err);
    })
  }

  // console.log(props.weeks);

  return(
    <Dropdown style={{margin: "2px"}} data-test="component-dropdownButton">
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Add to Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          weeks.map((week,index)=>
            <Dropdown.Item
              key={index} onClick={()=>handleClick(week.id,props.recipeId)}
            >
              {week.name} for week {week.number + 1}
            </Dropdown.Item>
          )
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

DropdownButton.propTypes = {
  recipeId: PropTypes.number.isRequired
};

export default DropdownButton;
