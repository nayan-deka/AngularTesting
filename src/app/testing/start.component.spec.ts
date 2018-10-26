
import {StartComponent} from './start.component';
describe('Component: Start', () => {
// Test Suite : collection of tests
  let component: StartComponent;

  beforeEach(() => {   
    component = new StartComponent("Murthy");
  });

  afterEach(() => { 
      component = null;
  });
  //test code
  it('Component should return Welcome with name', () => {    
    expect(component.name).toEqual('Welcome Murthy');
  });
});
