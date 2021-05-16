import { shallow } from 'enzyme';
import {findByTestAttr} from '../testUtils'
import NewWeek from './NewWeek';

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = () => shallow(<NewWeek/>);

test('renders without error', () => {
  const wrapper = setup();
  const newWeekComponent = findByTestAttr(wrapper,"component-newWeek");
  expect(newWeekComponent.length).toBe(1);
});
