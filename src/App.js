import { useState } from 'react';
import axios from 'axios';

function App() {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(username,email,password)
    axios.post('http://localhost:4000/signup',{
      username : username,
      email : email,
      password : password
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="App m-5" >
      <form onSubmit={handleSubmit}>
      <div className="mb-3 mt-3 row">
    <label htmlFor="inputUsername" className="col-sm-1 col-form-label">Username</label>
    <div className="col-sm-5">
      <input type="text" className="form-control" id="inputUsername" value={username} onChange = {(e)=>{ setUsername(e.target.value)}} />
    </div>
      </div>
      <div className="mb-3 row">
    <label htmlFor="inputEmail" className="col-sm-1 col-form-label">Email</label>
    <div className="col-sm-5">
      <input type="text" className="form-control" id="inputEmail" value={email} onChange = {(e)=>{ setEmail(e.target.value)}} />
    </div>
    </div>
    <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-1 col-form-label">Password</label>
    <div className="col-sm-5">
      <input type="password" className="form-control" id="inputPassword"  value={password} onChange = {(e)=>{ setPassword(e.target.value)}} />
    </div>
    </div>
     <button type="submit" className="btn btn-primary mb-3">Submit</button>
      {/* <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <p>UserName</p>
        <input required type='text' value={username} onChange = {(e)=>{ setUsername(e.target.value)}}  />
        <p>Email</p>
        <input required type='email' value={email} onChange = {(e)=>{ setEmail(e.target.value)}}  />
        <p>password</p>
        <input required type='password' value={password} onChange = {(e)=>{ setPassword(e.target.value)}}  />
        <button type="submit">Submit</button>
      </form> */}
     </form>   
    </div>
  );
}
export default App;
