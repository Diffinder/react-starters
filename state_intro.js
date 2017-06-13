import React from 'react';

//below is the class component creation - the difference between the stateless and class components is ,a class component can have state
class App extends React.Component {
  constructor(){ //first method to be invoked by default
    super(); //to tell that "this" belongs to the current component and not its parent
    this.state = {
      txt: "this is default state text"
    } //setting the state to the object whose value is set to an attribute txt
  }
  update(e){
    this.setState({txt: e.target.value}); //every time you set the state, it automatically calls the render
  }//method to update the state by using setState on this by passing the object
  render(){
    return (
      <div>
        <h1 className="bro-class">{this.state.txt}</h1> 
        <input type="text" onChange={this.update.bind(this)}/>    //you can bind the input value directly with the update method
      </div>
    );
    //We can create a widget instead and re-use it as required/
    return (
      <div>
        <h1 className="bro-class">{this.props.txt}</h1> 
        <Widget updateVal={this.update.bind(this)} />
        <Widget updateVal={this.update.bind(this)} /> 
        <Widget updateVal={this.update.bind(this)} />
      </div>
    );
  }
}

//create a constant called widget so as we can re-use it multiple times we need/
const Widget = (props) =>
  <input type="text" onChange={props.updateVal}/> //we're taking the prop called update from the widget calling happened in return of render

//We can assign type to the props expected by creating an object with the corresponding prop types and assigning to App.propTypes/
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number
}
//We can make a prop mandatory by adding .isRequired to the prop type i.e React.PropTypes.number.isRequired/
//if a mandatory prop is not passed when rendering the DOM, it will throw a warning
//Sometimes isRequired validaiton is not enough,then we can define custom validations as follows.
App.propTypes = {
  text(props,propName,component){
    if(!(propName in props)){
      return new Error("missing ${propName}");
    }
    if(props[propName].length < 6){
      return new Error("length not enough");
    }
  }
}
//We can add default prop values like below, which can be over written with the actual value passed during render
App.defaultProps = {
  txt: "defualt text here"
}

-------- index.js -------------

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';        
import './index.css';

ReactDOM.render(
  <App txt="hello bro!"/>,
  document.getElementById('root')
);