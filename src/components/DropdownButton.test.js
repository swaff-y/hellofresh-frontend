import { shallow } from 'enzyme';
import {findByTestAttr, checkProps} from '../testUtils'
import DropdownButton from './DropdownButton';


const defaultProps = {
  recipeId: 1
};

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<DropdownButton {...setupProps}/>);
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper,"component-dropdownButton");
  expect(component.length).toBe(1);
});
