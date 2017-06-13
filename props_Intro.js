import React from 'react';
//For props validation and default types, look into state_intro.js

//below is the class component creation - 
//the difference between the stateless and class components is ,a class component can have state
class App extends React.Component {
	render(){
    let txt = this.props.txt; //let defines the block(or its sub-blocks) scope variable 
    return (
      <div>
        <h1 className="bro-class">{txt}</h1> 
      </div>
    );
    
    //Alternative
    return (
      <div>
        <h1 className="bro-class">{this.props.txt}</h1> 
      </div>
    );
}

 /*An example to access nested data with react's prop.children*/
    class Button extends React.Component {
      render(){
        return <ButtonWidget>I <Heart/> React </ButtonWidget>;
      }
    }

    const ButtonWidget = (props) => <button>{props.children}</button>;

    //The following is the nested component we'll use in button widget
    class Heart extends React.Component {
      render() {
        return <span>&hearts;</span>
      }
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


//For nested data example
ReactDOM.render(
  <Button/>,
  document.getElementById('root')
);