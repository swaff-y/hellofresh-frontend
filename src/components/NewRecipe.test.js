import { shallow } from 'enzyme';
import {findByTestAttr} from '../testUtils'
import NewRecipe from './NewRecipe';

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = () => shallow(<NewRecipe/>);

test('renders without error', () => {
  const wrapper = setup();
  const newRecipeComponent = findByTestAttr(wrapper,"componenet-newRecipe");
  expect(newRecipeComponent.length).toBe(1);
});
