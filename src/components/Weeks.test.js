import { shallow } from 'enzyme';
import Weeks from './Weeks';
import {findByTestAttr} from '../testUtils'

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = (props={}) => {
  return shallow(<Weeks/>);
}

test('renders without error', () => {
  const wrapper = setup();
  const weeksComponent = findByTestAttr(wrapper,"component-recipes");
  expect(weeksComponent.length).toBe(1);
});
