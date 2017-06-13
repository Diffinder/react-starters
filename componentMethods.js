import React from 'react';
import ReactDOM from 'react-dom';

//when a component is added to the DOM, it's called mounting and when it's removed, it's demounting.
class App extends React.Component {
  constructor(){
    super();
    this.state = {increasing : false}
  }
  update(){
    ReactDOM.render(<App val={this.props.val + 1}/>,document.getElementById('root'));
  }
  componentWillReceiveProps(nextProps){
    this.setState({increasing: nextProps.val > this.props.val})
  }//this method is an in-built method which will be called before the component receives new props, nextProps will give the access
  //to the new props

  shouldComponentUpdate(nextProps,nextState){
    return nextProps.val % 3 === 0;
  }//an in-built method which will not prevent the update or setting the state, but prevents re-render!

  render(){
    console.log(this.state.increasing);
    return <button onClick={this.update.bind(this)}>{this.props.val}</button>
  }

  componentDidUpdate(prevProps,prevState){
    console.log('prevProps is '+ prevProps.val);
    console.log(`prevProps is ${prevProps.val}`); //we can embed variables like this as well
  }
  
}

App.defaultProps = {
  val : 0
}

export default App;
