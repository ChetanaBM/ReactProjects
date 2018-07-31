// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;


//  2nd try login

// import React from 'react';
// import render from 'react-dom';
// import FormErrors from './FormErrors.js';

//  export default class Login extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       formErrors: {email: '', password: ''},
//       emailValid: false,
//       passwordValid: false,
//       formValid: false

//     };
//   }

//  onChangeHandler = (e) => {
//     var state = this.state;
//     state[e.target.name] = e.target.value;

//     this.setState(state);
//   }

//   onSubmit = (e) => {
//     e.preventDefault();

//     //handle form processing here....
//   }

//   render() {
//     var {email, password} = this.state;

//     return (


//       <div className="container">




//       <div className="form-group">
//       <FormErrors formErrors={this.state.formErrors} />
//      </div>

//         <form className="form-signin" onSubmit={this.onChangeHandler}>
//           <h2 className="form-signin-heading">Create Account</h2>

//           <div className="form-group">
//             <input type="email" name="email" className="form-control"
//               placeholder="Email address" value={email} onChange={this.onChangeHandler} autoFocus />
//             <span className="help-block"></span>
//           </div>

//           <div className="form-group">
//             <input type="password" name="password" className="form-control"
//               placeholder="Password" value={password} onChange={this.onChangeHandler} />
//             <span className="help-block"></span>
//           </div>



//           <button className="btn btn-lg btn-primary btn-block" type="submit">SUBMIT</button>
//         </form>
//       </div>
//     );

//   }

// }




//3rd try login

// import React from 'react';
// //import ReactDOM from 'react-dom';
// import { Router,Route } from 'react-router';
// //import {Link} from "react-router-dom";



// const Welcome = ({user, onSignOut})=> {
//  // This is a dumb "stateless" component
//  return (
//    <div>
//      Welcome <strong>{user.username}</strong>!
//      <a onClick={onSignOut}>Sign out</a>
//    </div>
//  )
// }

// class LoginForm extends React.Component {

//    // Using a class based component here because we're accessing DOM refs
//   handleSignIn(e) {
//    e.preventDefault() //prevent the default submission
//    let username = this.refs.username.value
//    let password = this.refs.password.value
//    this.props.onSignIn(username, password)
//  }


//  render() {
//    return (
//      <form>
//        <h3>Sign in</h3>
//        <div><label> Username : </label> <input type="email" ref="username" placeholder="enter you username" required onChange={this.handleChange}/></div>
//        <div><label> Password : </label><input type="password" ref="password" placeholder="enter password" required onChange={this.handleChange}/></div>
//        <Router>
//       <Route path="/Account.js" component={Account}/>


//       </Router>



//      </form>
//    )
//  }

// }


// export default class App extends React.Component {

//  constructor(props) {
//    super(props)
//    // the initial application state
//    this.state = {
//      user: null
//    }
//  }

//  // App "actions" (functions that modify state)
//  signIn(username, password) {
//    // This is where you would call Firebase, an API etc...
//    // calling setState will re-render the entire app (efficiently!)
//    this.setState({
//      user: {
//        username,
//        password,
//      }
//    })
//  }

//  signOut() {
//    // clear out user from state
//    this.setState({user: null})
//  }

//  render() {
//    // Here we pass relevant state to our child components
//    // as props. Note that functions are passed using `bind` to
//    // make sure we keep our scope to App
//    return (
//      <div class="container">
//        <h1>LOGIN</h1>
//        { 
//          (this.state.user) ? 
//            <Welcome 
//             user={this.state.user} 
//             onSignOut={this.signOut.bind(this)} 
//            />
//          :
//            <LoginForm 
//             onSignIn={this.signIn.bind(this)} 
//            />
//        }
//      </div>
//    )

//  }

// }

//ROUTER


// import { BrowserRouter,Router, Route, Link } from 'react-router'
// import React from 'react';
// //import ReactDOM from 'react-dom';
// import './index.css';
// //import App from './App.js';
// import LoginForm from './LoginForm';
// import Account from './Account.js';
// i//mport { BrowserRouter } from 'react-router-dom'

// // export default class App extends React.Component{
// //     render(){
// //         return(
// // <Router>
// //   <div>
// //     <Route exact path="./LoginForm" component={LoginForm}/>
// //     <Route path="./Account" component={Account}/>
// //   </div>
// // </Router>
// //         );
// //     }
// // }




// export default class App extends React.Component{





// render((
//       <BrowserRouter>
//         <App/>
//       </BrowserRouter>
//     ), el)
//    const App = () => (
//       <div>
//         <nav>
//           <Link to="/dashboard">Dashboard</Link>
//         </nav>
//       </div>
//     )
//     const App = () => (
//       <div>
//         <nav>
//           <Link to="/dashboard">Dashboard</Link>
//         </nav>
//         <div>
//           <Route path="/dashboard" component={Dashboard}/>
//         </div>
//       </div>
//     )
// }


import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import Account from './Account';

/* App component */
export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LoginForm} />
                <Route path="/Account" component={Account} />
            </Switch>
        )
    }
}

