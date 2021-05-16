import React, {useEffect, useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {Link} from "react-router-dom";
// import PropTypes from 'prop-types';
import DropdownButton from './DropdownButton';
import "./recipesRender.css";
import api from '../api';

const RecipesRenderMenu = (props) => {

  const handleOnDragEnd = (result) => {
  if (!result.destination) return;
  const items = Array.from(props.recipes);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);

  // for( let i = 0; i < items.length; i++ ){
  //   api.post(`task-priority-update/${items[i].id}/${i+1}`)
  //   .then(res=>{
  //     // console.log("The return: ",res.data, "The item: ", items[i]);
  //   })
  //   .catch(err=>{
  //     console.warn(err);
  //   })
  // }
  //
  props.handleRecipeChange(items);
}

  return(
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="recipe">
      {(provided) =>
        (
        <div
          className="row"
          data-test="component-recipesRender"
          {...provided.droppableProps}
          ref={provided.innerRef}>
              {
                  props.recipes.length > 0
                  ?
                  props.recipes.map((recipe, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                    <Draggable
                      key={recipe.name + index}
                      draggableId={recipe.name + index}
                      index={index}>
                      {(provided) => (
                        <div className="card mb-4" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <img
                            src={recipe.image}
                            className="card-img-top"
                            alt={`${recipe.name} image`}
                          />
                          <div className="card-body">
                            {
                              props.type === "menu"
                              ?
                              <h5 className="card-title">{recipe.name} - Day {index + 1}</h5>
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
                      )}
                      </Draggable>
                    </div>
                  ))
                  :
                  <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                    <h4>
                      No recipes yet. Why not <Link to={"/recipe/" + props.params.page}>create one</Link>
                    </h4>
                  </div>
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
    </DragDropContext>
  )
}

// RecipesRender.propTypes = {
//   recipes: PropTypes.array.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   params: PropTypes.object.isRequired,
//   type: PropTypes.string.isRequired,
// };

export default RecipesRenderMenu;
