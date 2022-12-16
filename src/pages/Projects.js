import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, removeUserSession } from '../utils/common';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Projects = props => {
  const history = useNavigate();
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    history('/login');
  }
  const handleProject = () => {
    history('/project');
  }

  return (
    <div class="container">
    <Form>
    <div class="form-group">
    <label for="exampleFormControlSelect2">Selecione o projeto</label>
    <br></br>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>Projeto Um</option>
      <option>Projeto Dois</option>
      <option>Projeto Três</option>
    </select>
    </div>
    <br></br>
    <div className=''>
      <Button type="submit" className='' onClick={handleProject}>
          Ir
      </Button>
      <br></br>
      <br></br>
      <Button type="submit" className='' onClick={handleLogout}>
          Logout
      </Button>
    </div>
    </Form>
    </div>
  );
}

export default Projects;