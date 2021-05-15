import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Week from './Week';

Enzyme.configure({adapter: new EnzymeAdapter() });

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = (props={}) => {
  return shallow(<Week/>);
}

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup();
  const weekComponent = findByTestAttr(wrapper,"component-week");
  expect(weekComponent.length).toBe(1);
});
