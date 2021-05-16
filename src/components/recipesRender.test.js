import { shallow } from 'enzyme';
import {findByTestAttr, checkProps} from '../testUtils'
import RecipesRender from './RecipesRender';

const defaultProps = {
  recipes: [
  {
    id: 89,
    name: "Recipe 10",
    ingredients: "227g tub clotted cream, 25g butter, 1 tsp cornflour,100g parmesan, grated nutmeg, 250g fresh fettuccine or tagliatelle, snipped chives or chopped parsley to serve (optional)",
    instruction: "In a medium saucepan, stir the clotted cream, butter, and cornflour over a low-ish heat and bring to a low simmer. Turn off the heat and keep warm.",
    image: "https://res.cloudinary.com/dhl1cdqch/image/upload/v1621026603/Sammy_Meal_bvckqd.jpg",
    created_at: "2021-05-15T22:39:18.174Z",
    updated_at: "2021-05-15T22:39:18.174Z",
    total_pages: 2
  }],
  currentPage: 1,
  params: {
    page: 1
  },
  type: "display"
};

/**
  *Factory function to create a ShallowWrapper for the Congrats component
  *@function setup
  *@returns {ShallowWrapper}
*/

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<RecipesRender {...setupProps}/>);
}

test('renders without error', () => {
  const wrapper = setup();
  const recipesComponent = findByTestAttr(wrapper,"component-recipesRender");
  expect(recipesComponent.length).toBe(1);
});
