import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, removeUserSession } from '../utils/common';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Project = props => {
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
    <h3>Parâmetros do Projeto</h3>
    <form>
    <div class="form-group">
        <label for="formGroupExampleInput">Nome do Projeto</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome do Projeto"></input>
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Nome curto do Projeto</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Nome curto do Projeto"></input>
    </div>
    </form>
    <br></br>
    <div class="d-flex bd-highlight mb-3">
    <div class="mr-auto p-2 bd-highlight"><h1>div 1 </h1></div>
    <div class="ml-auto p-2 bd-highlight"><h1>div 2 </h1></div>
    </div>
    <Form>
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

export default Project;