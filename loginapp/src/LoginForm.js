//login without using bind() and with using arrow function.
import React from 'react';
import PropTypes from "prop-types";
//import Account from './Account';
import dummyData from "./Data/data.json";


export default class LoginForm extends React.Component {
  constructor(props) //no need of binding event or function
  {
  

    super(props)
<<<<<<< HEAD
    this.state = {
      error: false,
      username: "",
      password: "",
      data: [],
    };

  }

  componentDidMount() {
    console.log("inside Component did mount")
    // fetch('http://localhost:3000/Data/data.json')
    // .then((response) => response.json())
    //.then(dummyData => this.setState({ data: dummyData }));
    this.setState({ data: dummyData });
    // console.log("Data: " + dummyData[0].userName);
    // console.log("Data: " + dummyData[0].passWord);
=======
    
      
       this.state={
                     error: false,
                     username: "",
                     password: "",
                  };
>>>>>>> 5f9689891c375fcd2b50250c8c574e1e0e76aa74

  }

  static contextTypes = {
<<<<<<< HEAD
    router: PropTypes.object
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }
=======
                          router: PropTypes.object
                        }
>>>>>>> 5f9689891c375fcd2b50250c8c574e1e0e76aa74

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
<<<<<<< HEAD
  handleSignIn = e => {
    e.preventDefault();


    this.state.data.map((user) => {

      if (this.state.username === user.userName && this.state.password === user.passWord) {
        console.log(this.state.username);

        // localStorage.setItem(this.state.username, 'chetana@gmail.com');
        // localStorage.setItem(this.state.password, 'abcdef');
        this.context.router.history.push('./Account');

        console.log("inside Account")
      }
    })

    this.setState({ error: true });


  }



  render() {

    return (

      <div className='container'>



        <form onSubmit={this.handleSignIn}>

          <h3>LOGIN</h3>
          <div><label> Username : </label> <input type="email" name="username" placeholder="enter you username" required onChange={this.handleChange} /></div>
          <div><label> Password : </label><input type="password" name="password" placeholder="enter password" required onChange={this.handleChange} /></div>
          <input type="submit" value="LOGIN" />
          {(this.state.error) && <span>Invalid credentials </span>}


        </form>
      </div>
    )
  }
=======
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
>>>>>>> 5f9689891c375fcd2b50250c8c574e1e0e76aa74

}