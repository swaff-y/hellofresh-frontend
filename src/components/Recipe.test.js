import { shallow } from 'enzyme';
import {findByTestAttr} from '../testUtils'
import Recipe from './Recipe';
import ReactRouter from 'react-router'


/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = (props={}) => {
  return shallow(<Recipe/>);
}
// 
// test('router params', () => {
//   jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: '1234' });
//   // id = 1234 in your tested component
// });

test('renders without error', () => {
  const wrapper = setup();
  const recipeComponent = findByTestAttr(wrapper,"component-recipe");
  expect(recipeComponent.length).toBe(1);
});
