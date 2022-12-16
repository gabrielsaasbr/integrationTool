import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../utils/common';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';

const Login = props => {
  const history = useNavigate();
  //const username = useFormInput('');
  //const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = (event) => {
    setError(null);
    setLoading(true);
    /*axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      history('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });*/
    if(username === "admin" && password === "admin"){
      setLoading(false);
      setUserSession("1234", "admin");
      history('/projects');
    }else{
      setLoading(false);
      setError("Something went wrong. Please try again later.");
    }
  }

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  return (
    <div className="Login">
      <Form onSubmit={handleLogin} className="col-md-5 mx-auto">
        <Form.Group controlId="name" >
          <Form.Label className="">Username</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Button type="submit">
          Login
        </Button>
      </Form>
    </div>
    /*<div>
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>*/

  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;