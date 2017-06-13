import React from 'react';
import ReactDOM from 'react-dom';

//when a component is added to the DOM, it's called mounting and when it's removed, it's demounting.
class App extends React.Component {
  constructor(){
    super();
    this.state = {val : 0}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({val : this.state.val + 1});
  }
  componentWillMount(){
    console.log("component will mount");
    this.setState({m : 2});
  }//This method will is an in-built method which will be called just before a  component is mounted onto the dom

  render(){
    console.log('render');
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>

  }

  componentDidMount(){
    console.log("component did mount and the node is" + ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update,500);
  }//This method will is an in-built method which will be called after a  component is mounted onto the dom
  //in the second line,we're calling update method for every half second by setting up an interval
  

  componentWillUnmount(){
    console.log("component will unmount");
    clearInterval(this.inc);
  }//This method will is an in-built method which will be called just before a  component is unmounted from the dom
  //unless we clear the intervals set, we cannot unmount the component.
  
}

class Wrapper extends React.Component {
  mount(){
    ReactDOM.render(<App/>,document.getElementById('a'));
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render(){
    return(
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
      </div>
    );
  }
}


export default Wrapper;
