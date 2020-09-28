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

import { Link } from "react-router-dom";
import { getQuartoRequest } from "store/modules/quarto/actions";
import { newEstadiaRequest } from "store/modules/estadia/actions";


const NovaEstadia = (props) => {
  const dispatch = useDispatch();
  const [dataEntrada, setDataEntrada] = React.useState("");
  const [dataSaida, setDataSaida] = React.useState("");
  const [quarto, setQuarto] = React.useState("");

  const id = props.match.params.id;
  const idHotel = props.match.params.idHotel;

  const quartos = useSelector(state => state.quarto.quarto);

  React.useEffect(() => {
    dispatch(getQuartoRequest(idHotel));
  }, [dispatch, idHotel]);

  const submitForm = () => {
    const estadiaInfo = {
      dataEntrada, dataSaida, quarto, id, idHotel
    }
    dispatch(newEstadiaRequest(estadiaInfo));
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Nova estadia</CardTitle>
              </CardHeader>
              <CardBody>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="nome">ID Reserva</Label>
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
                      <Label for="nome">Quarto</Label>
                      <Input
                        type="select"
                        placeholder="Selecione o quarto"
                        value={quarto}
                        onChange={(e) => setQuarto(e.target.value)}
                      >
                        <option value="">Selecione um quarto</option>
                        {quartos.map((quart,i) => (
                          <option key={i} value={quart.id}>Andar: {quart.andar} Num: {quart.numero}</option>
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
        <Link to={`/hotel/${idHotel}`}>
          <Button>Voltar</Button>
        </Link>
      </div>
    </>
  );
}

export default NovaEstadia;
