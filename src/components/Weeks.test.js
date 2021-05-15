import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Weeks from './Weeks';

Enzyme.configure({adapter: new EnzymeAdapter() });

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = (props={}) => {
  return shallow(<Weeks/>);
}

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup();
  const weeksComponent = findByTestAttr(wrapper,"component-recipes");
  expect(weeksComponent.length).toBe(1);
});
