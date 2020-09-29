import React from "react";
import Moment from 'react-moment';
import { MdHotel } from "react-icons/md";
import { GiExitDoor } from "react-icons/gi";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  Table,
  CardFooter,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getHotelRequest } from "store/modules/hotel/actions";
import { Link } from "react-router-dom";
import { delReservaRequest } from "store/modules/reserva/actions";
import { delEstadiaRequest } from "store/modules/estadia/actions";

const Hotel = (props) => {
  const [selected, setSelected] = React.useState("Reservas");
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const hotel = useSelector(state => state.hotel.hotel);

  React.useEffect(() => {
    dispatch(getHotelRequest(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="content">
        <Row style={{ marginBottom: 30 }}>
          <Col lg="12" md="12">
            <Button className={selected === "Reservas" ? "btn-info" : ""} onClick={() => setSelected("Reservas")}>
              Reservas
            </Button>
            <Button className={selected === "Estadias" ? "btn-info" : ""} onClick={() => setSelected("Estadias")}>
              Estadias
            </Button>
            <Button className={selected === "Quartos" ? "btn-info" : ""} onClick={() => setSelected("Quartos")}>
              Quartos
            </Button>
            <Button className={selected === "Tipos de quarto" ? "btn-info" : ""} onClick={() => setSelected("Tipos de quarto")}>
              Tipos de quarto
            </Button>
          </Col>
        </Row>
        <Row>
        {selected === "Reservas" && (
            <Col lg="12" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Reservas</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>Id</th>
                        <th>Id do cliente</th>
                        <th>Data entrada</th>
                        <th>Data saída</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {(hotel.reservas || []).map((reserva, i) => (
                        <tr key={i}>
                          <td>{i}</td>
                          <td>{reserva.nome || reserva._id}</td>
                          <td>
                            <Moment format="DD/MM/YYYY">{reserva.dataentrada}</Moment>
                          </td>
                          <td>
                            <Moment format="DD/MM/YYYY">{reserva.datasaida}</Moment>
                          </td>
                          <td className="text-right">
                            <Link
                              className="btn-link btn btn-info btn-sm"
                              to={`/hotel/${id}/estadia/${reserva._id}`}
                            >
                              <MdHotel />
                            </Link>
                            <button
                              className="btn-link btn btn-danger btn-sm"
                              onClick={() => dispatch(delReservaRequest({ idReserva: reserva.id, idHotel: id }))}
                            >
                              <i className="tim-icons icon-simple-remove"></i>
                            </button>

                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter style={{ textAlign: "right" }}>
                  <Link to={`/novareserva/${hotel.id}`}>
                    <Button className="btn-success">Nova reserva</Button>
                  </Link>
                </CardFooter>
              </Card>
            </Col>
          )}
          {selected === "Estadias" && (
            <Col lg="12" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Estadias</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>Id</th>
                        <th>Id do cliente</th>
                        <th>Quarto</th>
                        <th>Data entrada</th>
                        <th>Data saída</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {(hotel.estadias || []).map((estadia, i) => (
                        <tr key={i}>
                          <td>{estadia.id}</td>
                          <td>{estadia.nome || estadia._id}</td>
                          <td>Andar: {estadia.andar} Num: {estadia.numero}</td>
                          <td>
                            <Moment format="DD/MM/YYYY">{estadia.dataentrada}</Moment>
                          </td>
                          <td>
                            <Moment format="DD/MM/YYYY">{estadia.datasaida}</Moment>
                          </td>
                          <td className="text-right">
                            <button
                              className="btn-link btn btn-danger btn-sm"
                              onClick={() => dispatch(delEstadiaRequest({ idEstadia: estadia.id, idHotel: id }))}
                            >
                              <GiExitDoor size={20} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          )}
          {selected === "Quartos" && (
            <Col lg="12" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Quartos</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>Id</th>
                        <th>Andar</th>
                        <th>Número</th>
                        <th>Tipo</th>
                        <th>Preço</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(hotel.quartos || []).map((quarto, i) => (
                        <tr key={i}>
                          <td>{quarto.id}</td>
                          <td>{quarto.andar}</td>
                          <td>{quarto.numero}</td>
                          <td>{quarto.tipo}</td>
                          <td>R${quarto.preco}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter style={{ textAlign: "right" }}>
                  <Link to={`/novoquarto/${hotel.id}`}>
                    <Button className="btn-success">Novo quarto</Button>
                  </Link>
                </CardFooter>
              </Card>
            </Col>
          )}
          {selected === "Tipos de quarto" && (
            <Col lg="12" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Tipos de quarto</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>Id</th>
                        <th>Tipo</th>
                        <th>Cama extra</th>
                        <th>Preço</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(hotel.tipo_quarto || []).map((quarto, i) => (
                        <tr key={i}>
                          <td>{quarto.id}</td>
                          <td>{quarto.tipo}</td>
                          <td>{quarto.cama_extra}</td>
                          <td>R${quarto.preco}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter style={{ textAlign: "right" }}>
                  <Link to={`/novotipodequarto/${hotel.id}`}>
                    <Button className="btn-success">Novo tipo de quarto</Button>
                  </Link>
                </CardFooter>
              </Card>
            </Col>
          )}
        </Row>
        <Link to="/hotel">
          <Button>Voltar</Button>
        </Link>
      </div>
    </>
  );
}

export default Hotel;
