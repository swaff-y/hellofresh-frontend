import { shallow } from 'enzyme';
import {findByTestAttr} from '../testUtils'
import NewRecipe from './NewRecipe';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = () =>{
  shallow(<NewRecipe/>)
};

test('renders without error', () => {

  const wrapper = setup();
  const newRecipeComponent = findByTestAttr(wrapper,"componenet-newRecipe");
  expect(newRecipeComponent.length).toBe(1);
});
