import React from 'react';


//below is the class component creation - 
//the difference between the stateless and class components is ,a class component can have state
class App extends React.Component {
	render(){
    return <h1 className="bro-class">Bro!</h1>; // since class is reserved word in JSX, we shall use className instead
    /*
    We cannot pass two tags directly i.e return <h1>hi</h1> <b>blha</>; will throw an error as it gets translated to
    return React.createElement("h1",null,"hi") React.createElement("b",null,"blha") which is incorrect as we can't pass two
    functions in a return statement
    To use multiple tags, we can wrap them in a parenthesis () as below
    Always the return tags should be in a single wrapper..nesting is fine but not multiple tags separately
    */
    return (
      <div>
        <h1 className="bro-class">Bro!</h1>
        <b>Cool</b>
      </div>
    );
    
    //This is still correct -  i.e if the arguments to be returned starts in the same line as return.
    return <div>
        <h1 className="bro-class">Bro!</h1>
        <b>Cool</b>
      </div>;

    //But this is wrong!
    return
      <div>
        <h1 className="bro-class">Bro!</h1>
        <b>Cool</b>
      </div>;

    }

    return React.createElement("h1",null,"Bro!"); // We can use this format as well
    //first argument can be a component or html tag, if it's a component then it will start with capital letter, but here
    //it can be identified as html tag
    //second argument is for props like className etc,
    // third arguemnt is either for inner elements of the first element or content or string of it

}

-------- index.js -------------

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);