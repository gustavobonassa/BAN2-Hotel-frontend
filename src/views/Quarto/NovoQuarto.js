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
import { useDispatch, useSelector } from "react-redux";

import { getTipoQuartoRequest } from "../../store/modules/tipoQuarto/actions";
import { Link } from "react-router-dom";
import { newQuartoRequest } from "store/modules/quarto/actions";


const NovoQuarto = (props) => {
  const dispatch = useDispatch();
  const [numero, setNumero] = React.useState("");
  const [andar, setAndar] = React.useState("");

  const id = props.match.params.id;

  const tipoQuarto = useSelector(state => state.tipoQuarto.tipoQuarto);
  const [tipo, setTipo] = React.useState(tipoQuarto.lenght ? tipoQuarto[0].id : null);
  React.useEffect(() => {
    setTipo(tipoQuarto[0].id);
  }, [tipoQuarto]);

  React.useEffect(() => {
    dispatch(getTipoQuartoRequest(parseInt(id)));
  }, [dispatch, id]);

  const submitForm = () => {
    const quartoInfo = {
      numero, andar, tipo, id
    }
    dispatch(newQuartoRequest(quartoInfo));
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Novo Quarto</CardTitle>
              </CardHeader>
              <CardBody>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="nome">Id Hotel</Label>
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
                        type="select"
                        placeholder="Selecione o tipo"
                        value={tipo}
                        onSelect={(e) => setTipo(e.target.value)}
                      >
                        {tipoQuarto.map(tipo => (
                          <option value={tipo.id}>{tipo.tipo}</option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="nome">Número do quarto</Label>
                      <Input
                        type="text"
                        placeholder="Número do quarto"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="nome">Andar</Label>
                      <Input
                        type="text"
                        placeholder="Andar"
                        value={andar}
                        onChange={(e) => setAndar(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                {/* <FormGroup>
                  <Label for="telefone">Telefone</Label>
                  <Input
                    type="text"
                    id="telefone"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </FormGroup> */}

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

export default NovoQuarto;
