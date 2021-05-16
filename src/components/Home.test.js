import { shallow } from 'enzyme';
import {findByTestAttr} from '../testUtils'
import Home from './Home';

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = () => shallow(<Home/>);

test('renders without error', () => {
  const wrapper = setup();
  const homeComponent = findByTestAttr(wrapper,"component-home");
  expect(homeComponent.length).toBe(1);
});
