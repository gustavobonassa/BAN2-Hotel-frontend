import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { newEmpregadoRequest } from "store/modules/empregado/actions";
import { getHotelRequest } from "store/modules/hotel/actions";


const Empregado = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = React.useState("");
  const [hotel, setHotel] = React.useState("");

  const [rg, setRg] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [senha, setSenha] = React.useState("");

const hotels = useSelector(state => state.hotel.hotels);
  React.useEffect(() => {
    dispatch(getHotelRequest());
  }, [dispatch])

  const submitForm = () => {
    const empregadoInfo = {
      nome, rg, login, senha,
    }
    dispatch(newEmpregadoRequest(empregadoInfo));
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Novo Empregado</CardTitle>
              </CardHeader>
              <CardBody>
              <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="nome">Hotel</Label>
                      <Input
                        type="select"
                        id="hotel"
                        placeholder="Hotel"
                        value={hotel}
                        onChange={(e) => setHotel(e.target.value)}
                        >
                          <option value="">Selecione o hotel</option>
                        {hotels.map(hot => (
                          <option value={hot.id}>{hot.nome}</option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="nome">Nome</Label>
                      <Input
                        type="text"
                        id="nome"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="rg">RG</Label>
                      <Input
                        type="text"
                        id="rg"
                        placeholder="RG"
                        value={rg}
                        onChange={(e) => setRg(e.target.value)}
                      />
                    </FormGroup>

                  </Col>
                </Row>
                <hr />
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Login</Label>
                      <Input
                        type="text"
                        placeholder="Login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Senha</Label>
                      <Input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Button onClick={() => submitForm()}>Enviar</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Empregado;
