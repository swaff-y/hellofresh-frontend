import { shallow } from 'enzyme';
import {findByTestAttr} from '../testUtils'
import Recipes from './Recipes';

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = (props={}) => {
  return shallow(<Recipes/>);
}

test('renders without error', () => {
  const wrapper = setup();
  const recipeComponent = findByTestAttr(wrapper,"component-recipes");
  expect(recipeComponent.length).toBe(1);
});
