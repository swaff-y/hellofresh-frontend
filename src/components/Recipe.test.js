import { shallow } from 'enzyme';
import {findByTestAttr} from '../testUtils'
import Recipe from './Recipe';

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = (props={}) => {
  return shallow(<Recipe/>);
}

test('renders without error', () => {
  const wrapper = setup();
  const recipeComponent = findByTestAttr(wrapper,"component-recipe");
  expect(recipeComponent.length).toBe(1);
});
