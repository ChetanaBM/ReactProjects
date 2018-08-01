//login using bind() and without using arrow function.
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import Account from './Account';

// export default class LoginForm extends React.Component 
// {
//   static contextTypes = {
//     router: PropTypes.object
//   }

//   constructor(props) 
//   {
//     super(props)
//       this .handleSignIn=this.handleSignIn.bind(this)
//        this.state={
//                      error: false,
//                   };

//   }

//   handleSignIn(e) 
//   {
//     e.preventDefault() 
//       let username = this.refs.username.value
//       let password = this.refs.password.value

//       if(username === 'chetana@gmail.com' && password === 'abcdef')
//     {   
//         localStorage.setItem(username, 'chetana@gmail.com');
//         localStorage.setItem(password, 'abcdef');
//         console.log('valid');
//         this.context.router.history.push('./Account');

//     }

//     else
//     {
//     this.setState({error: true});
//     }   
// }
    
// render() {


  
//     return  (
//               <div className='container'>
//               <form onSubmit={this.handleSignIn }>
//               <h3>LOGIN</h3>
//               <div><label> Username : </label> <input type="email" ref="username" placeholder="enter you username" required onChange={this.handleChange}/></div>
//               <div><label> Password : </label><input type="password" ref="password" placeholder="enter password" required onChange={this.handleChange}/></div>
//               <input type="submit" value="LOGIN" />
//               {(this.state.error) && <span>Invalid credentials </span>}

             
//               </form>
//               </div>
//             )
//         }

// }

//login without using bind() and with using arrow function.

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Account from './Account';

export default class LoginForm extends React.Component 
{
  constructor(props) //no need of binding event or function
  {
    super(props)
      
       this.state={
                     error: false,
                  };

  }

  static contextTypes = {
                            router: PropTypes.object
                        }

  //arrow function                  
  handleSignIn =(e) =>
  {
    e.preventDefault() 
      let username = this.refs.username.value
      let password = this.refs.password.value

      if(username === 'chetana@gmail.com' && password === 'abcdef')
    {   
        localStorage.setItem(username, 'chetana@gmail.com');
        localStorage.setItem(password, 'abcdef');
        console.log('valid');
        this.context.router.history.push('./Account');

    }

    else
    {
    this.setState({error: true});
    }   
}

 

 
    
render() {
  
    return  (
              <div className='container'>
              <form onSubmit={this.handleSignIn }> 
              <h3>LOGIN</h3>
              <div><label> Username : </label> <input type="email" ref="username" placeholder="enter you username" required onChange={this.handleChange}/></div>
              <div><label> Password : </label><input type="password" ref="password" placeholder="enter password" required onChange={this.handleChange}/></div>
              <input type="submit" value="LOGIN" />
              {(this.state.error) && <span>Invalid credentials </span>}

             
              </form>
              </div>
            )
        }

}