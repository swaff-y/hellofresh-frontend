import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter() });

/**
  *Factory function to create a ShallowWrapper for the APP component
  *@function setup
  *@returns {ShallowWrapper}
*/
const setup = () => shallow(<App/>);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () =>{
 const wrapper = setup();
 const appComponent = findByTestAttr(wrapper,"component-app");
 expect(appComponent.length).toBe(1);
});
