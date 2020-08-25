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
  Table,
  CardFooter,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getHotelRequest } from "store/modules/hotel/actions";
import { Link } from "react-router-dom";

const Hotel = (props) => {
  const [selected, setSelected] = React.useState("Quartos");
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
            <Button className={selected === "Quartos" ?"btn-info" : ""} onClick={() => setSelected("Quartos")}>
              Quartos
            </Button>
            <Button className={selected === "Tipos de quarto" ?"btn-info" : ""} onClick={() => setSelected("Tipos de quarto")}>
              Tipos de quarto
            </Button>
          </Col>
        </Row>
        <Row>
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
