import React from "react";
import { Button, FormGroup, Label, Input, } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { signInRequest } from "../../store/modules/auth/actions";

const Login = (props) => {
  const dispatch = useDispatch()
  const [login, setLogin] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const sendLogin = () => {
    dispatch(signInRequest(login, senha));
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100%", backgroundImage: "url(https://media-manager.noticiasaominuto.com.br/1920/naom_5e8c7b8fb4dce.jpg)", backgroundSize: "cover" }}>
      <div style={{ maxWidth: 500, padding: 30, backgroundColor: "#fff", borderRadius: 10 }}>
        <FormGroup>
          <Label for="exampleEmail">Login</Label>
          <Input type="text" onChange={(e) => setLogin(e.target.value)} value={login} style={{ color: "#000" }}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSenha">Senha</Label>
          <Input type="password" onChange={(e) => setSenha(e.target.value)} value={senha} style={{ color: "#000" }}/>
        </FormGroup>
        <Button style={{ width: "100%" }} onClick={() => sendLogin()}>Entrar</Button>
      </div>
    </div>
  );
}

export default Login;
