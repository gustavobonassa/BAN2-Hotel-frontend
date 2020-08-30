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
  CardFooter,
} from "reactstrap";
import { useDispatch } from "react-redux";

import { newTipoQuartoRequest } from "../../store/modules/tipoQuarto/actions";
import { Link } from "react-router-dom";

const NovoTipoQuarto = (props) => {
  const dispatch = useDispatch();
  const [preco, setPreco] = React.useState("");
  const [camaExtra, setCamaExtra] = React.useState("");
  const [tipo, setTipo] = React.useState("");

  const id = props.match.params.id;

  const submitForm = () => {
    const tipoQuartoInfo = {
      preco, camaExtra, id, tipo,
    }
    dispatch(newTipoQuartoRequest(tipoQuartoInfo));
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Novo Tipo de Quarto</CardTitle>
              </CardHeader>
              <CardBody>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="nome">ID Hotel</Label>
                      <Input
                        type="text"
                        id="nome"
                        placeholder="Nome"
                        value={id}
                        disabled
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="nome">Tipo de quarto</Label>
                      <Input
                        type="text"
                        placeholder="Tipo de quarto"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="nome">Preço</Label>
                      <Input
                        type="text"
                        placeholder="Preço"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="nome">Cama extra</Label>
                      <Input
                        type="text"
                        placeholder="Cama extra"
                        value={camaExtra}
                        onChange={(e) => setCamaExtra(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter style={{ textAlign: "right" }}>
                <Button onClick={() => submitForm()}>Enviar</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Link to={`/hotel/${id}`}>
          <Button>Voltar</Button>
        </Link>
      </div>
    </>
  );
}

export default NovoTipoQuarto;
