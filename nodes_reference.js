import React from 'react';
import ReactDOM from 'react-dom';

//below is the class component creation - the difference between the stateless and class components is ,a class component can have state
class App extends React.Component {
  constructor(){ //first method to be invoked by default
    super(); //to tell that "this" belongs to the current component and not its parent
    this.state = {a : "no data in a",b : "no data in b"}
  }
  update(){
    this.setState({
      a: this.a.value,
      b: this.refs.b.value,
    });//this.a works for node but not component as a component can have multiple nodes
  }
  update(){
    this.setState({
      a: ReactDOM.findDOMNode(this.a).value,
      b: this.refs.b.value,
    });//this.a works for node but not component as a component can have multiple nodes
  }//method to update the state by using setState on this by passing the object,here we're setting the target's value to it
  update(){
    this.setState({
      a: this.a.refs.input.value,
      b: this.refs.b.value,
    });//this.a works for node but not component as a component can have multiple nodes
  }

  render(){
    //Following snippet illustrates synthetic event system available in React
    return(
      <div> 
        <input type="text" onChange={this.update.bind(this)}/>{this.state.a} 
      </div>///the above block binds the state with the input value onChange and we're printing the text beside it
      <div> 
        //<input type="text" ref={(node) => this.a = node} onChange={this.update.bind(this)}/>{this.state.a} 
        //<input type="text" ref="b" onChange={this.update.bind(this)}/>{this.state.b} 
      </div>//When we're using two tags,this.state.a will update both as we're not differentiating both inputs
      //to differentiate them, we can use ref for that and will remove the event (e) in update and access the input fields using this reference
      //ref will be referred by 'refs' using 'this' in the update method to access that particular node
      //we can also make the reference directly to the node by setting this.a = node 
      //node term is used in the above setting for understanding DOM structure, it's not a keyword..we can use like below as well.
      //<input type="text" ref={(blah) => this.a = blah} onChange={this.update.bind(this)}/>{this.state.a} 
    //
    );

    return(
      <div> 
        <Input ref={(component) => this.a = component} update={this.update.bind(this)} />{this.state.a} 
        <input type="text" ref="b" onChange={this.update.bind(this)}/>{this.state.b} 
      </div>
    );
  }
}

class Input extends React.Component {
  /*render(){
    return <input type="text" onChange={this.props.update} />
  }*///if the inpur statement is enclosed in a div, then the component refers to div and returns its value as null
  render(){
    return (
        <div>
          <input ref="input" type="text" onChange={this.props.update}/>
        </div>
      );
  }
}

export default App;
