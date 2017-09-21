import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';
// shallow allows to see object structure
//Mount allows to invoke method
//console.log and comments are retained for dev test purposes.


describe('<App/>', () => {
	//Component check
	it('renders 1 <App/> component', () => {
		const component = shallow(<App name="app" />);
		//console.log(component.props);
		expect(component).toHaveLength(1);
	});
	//Checking  DOM  object structure via instances
	it('it renders props correctly', ()=> {
		const component = shallow(<App name="app" />);
		//console.log(component.instance().props);
		expect(component.instance().props.name).toBe('app');
	});
	//Functional/Action checks
	it('it updates the counter on button click', () => {
		const component = mount(<App />);
		//console.log(component);
		const button = component.find('button');
		//console.log(button.props); output :: //{onclick=[function], children: 'Increment'}
		
		button.simulate('click');
		button.simulate('click');
		button.simulate('click');
		button.simulate('click');
		button.simulate('click');
		//console.log(component.state());
		expect(component.state().counter).toEqual(5)
	})
});