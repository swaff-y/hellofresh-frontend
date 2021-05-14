import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Recipes from './Recipes';

Enzyme.configure({adapter: new EnzymeAdapter() });

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = (props={}) => {
  return shallow(<Recipes/>);
}

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup();
  const recipeComponent = findByTestAttr(wrapper,"component-recipes");
  expect(recipeComponent.length).toBe(1);
});
