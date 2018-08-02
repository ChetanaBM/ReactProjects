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
                     username: "",
                     password: "",
                  };

  }

  static contextTypes = {
                          router: PropTypes.object
                        }

  handleChangeuname=(e) =>
  {
    const name=e.target.value;
    this.setState({
      username: name,
     
    })
  }
 
  handleChangepswd=(e) =>
  {
    
    const pswd=e.target.value;
    this.setState({
           password: pswd,
    })
  }

  //arrow function                  
  handleSignIn =(e) =>
  {
    e.preventDefault() 
      //let username = this.refs.username.value
      //let password = this.refs.password.value

      if(this.state.username === 'chetana@gmail.com' && this.state.password === 'abcdef')
    {   
        localStorage.setItem(this.state.username, 'chetana@gmail.com');
        localStorage.setItem(this.state.password, 'abcdef');
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
              <div><label> Username : </label> <input type="email" value={this.state.username}  placeholder="enter you username" required onChange={this. handleChangeuname}/></div>
              <div><label> Password : </label><input type="password"  value={this.state.password} placeholder="enter password" required onChange={this.handleChangepswd}/></div>
              <input type="submit" value="LOGIN" />
              {(this.state.error) && <span>Invalid credentials </span>}

             
              </form>
              </div>
            )
        }

}