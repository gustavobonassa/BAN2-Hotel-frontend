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
import { getClientesRequest } from "store/modules/cliente/actions";
import { newReservaRequest } from "store/modules/reserva/actions";


const NovaReserva = (props) => {
  const dispatch = useDispatch();
  const [cliente, setCliente] = React.useState("");
  const [dataEntrada, setDataEntrada] = React.useState("");
  const [dataSaida, setDataSaida] = React.useState("");

  const id = props.match.params.id;

  const tipoQuarto = useSelector(state => state.tipoQuarto.tipoQuarto);
  const clientes = useSelector(state => state.cliente.clientes);

  const [tipo, setTipo] = React.useState(tipoQuarto.lenght ? tipoQuarto[0].id : "");
  React.useEffect(() => {
    if (tipoQuarto && tipoQuarto[0]) {
      setTipo(tipoQuarto[0].id);
    }
  }, [tipoQuarto]);

  React.useEffect(() => {
    dispatch(getTipoQuartoRequest(parseInt(id)));
    dispatch(getClientesRequest());
  }, [dispatch, id]);

  const submitForm = () => {
    const reservaInfo = {
      cliente, dataEntrada, dataSaida, tipo, id
    }
    console.log(reservaInfo)
    dispatch(newReservaRequest(reservaInfo));
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Nova reserva</CardTitle>
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
                      <Label for="nome">Tipo de quarto pretendido</Label>
                      <Input
                        type="select"
                        placeholder="Selecione o tipo"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                      >
                        {tipoQuarto.map((tipo,i) => (
                          <option key={i} value={tipo.id}>{tipo.tipo}</option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="nome">Cliente</Label>
                      <Input
                        type="select"
                        placeholder="Selecione o cliente"
                        value={cliente}
                        onChange={(e) => setCliente(e.target.value)}
                      >
                        <option value="">Selecione um cliente</option>
                        {clientes.map((cli,i) => (
                          <option key={i} value={cli.id}>{cli.nome}</option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleDate">Data entrada</Label>
                      <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                        value={dataEntrada}
                        onChange={(e) => setDataEntrada(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                    <Label for="exampleDate">Data saída</Label>
                      <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                        value={dataSaida}
                        onChange={(e) => setDataSaida(e.target.value)}
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

export default NovaReserva;
