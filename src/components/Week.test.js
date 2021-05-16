import { shallow } from 'enzyme';
import {findByTestAttr} from '../testUtils'
import Week from './Week';

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = (props={}) => {
  return shallow(<Week/>);
}

test('renders without error', () => {
  const wrapper = setup();
  const weekComponent = findByTestAttr(wrapper,"component-week");
  expect(weekComponent.length).toBe(1);
});
