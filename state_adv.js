import React from 'react';

//below is the class component creation - the difference between the stateless and class components is ,a class component can have state
class App extends React.Component {
  constructor(){ //first method to be invoked by default
    super(); //to tell that "this" belongs to the current component and not its parent
    this.state = {currentEvent : "---"}
    this.update = this.update.bind(this) //binding the current component as this - to avoid this to be taken as any parent component
  }
  update(e){
    this.setState({currentEvent: e.type})
  }//method to update the state by using setState on this by passing the object
  render(){
    //Following snippet illustrates synthetic event system available in React
    return(
      <div>
        <textarea 
        cols="30"
        rows="10"
        onKeyPress={this.update}
        onFocus={this.update}
        onBlur={this.update}
        onCopy={this.update}
        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    );
  }
}

export default App;

-------- index.js -------------

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';        
import './index.css';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);