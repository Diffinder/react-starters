import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            err:'',
            input:'/* Add your JSX here */',
            output:'',
        }
    }
    update(e){
        let code = e.target.value;
        try{
            this.setState({
                output: window.Babel
                    .transform(code, { presets: ['es2015', 'react']})
                    .code,
                err: ''
            })
        }
        catch(err){
            this.setState({err: err.message})
        }
    }
    render(){
        return(
            <Parent>
                <div className="childA"></div>
                <div className="childB"></div>
            </Parent>
        );
    }
}

class Parent extends React.Component {
    render(){
        let items = this.props.children.map(child => child);
        //the above way needs atleast two children to iterate using map
        let items = React.Children.map(this.props.children,child => child);
        //the above way will work even for one children - returns an array
        let items = React.Children.toArray(this.props.children);
        //this is similar to the previous one, works with one or more children - returns an array
        let items = React.Children.forEach(this.props.children,child => console.log(child.props.className));
        //this would give us the same result, as forEach won't return an array and does any action for the iterating
        // each item, let's log a message instead
        let items = React.Children.only(this.props.children);
        //this will throw an error if there are more than one children
        console.log(items);
        return(
            null
        );
    }
}

export default App;
/**
 * Created by rakesh on 2/17/17.
 */
