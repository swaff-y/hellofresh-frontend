import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from './Home';

Enzyme.configure({adapter: new EnzymeAdapter() });

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = () => shallow(<Home/>);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup();
  const homeComponent = findByTestAttr(wrapper,"component-home");
  expect(homeComponent.length).toBe(1);
});
