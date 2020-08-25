import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getHotelsRequest } from "store/modules/hotel/actions";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";


const Hotel = () => {
  const dispatch = useDispatch();
  const hotels = useSelector(state => state.hotel.hotels);

  React.useEffect(() => {
    dispatch(getHotelsRequest());
  }, [dispatch]);

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Hotels</CardTitle>
              </CardHeader>
              <CardBody>
                <div style={{ maxHeight: 400, overflowY: "auto" }}>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Rua</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {hotels.map((hotel, i) => (
                        <tr key={i}>
                          <td>{hotel.nome}</td>
                          <td>{hotel.telefone}</td>
                          <td>{hotel.rua}</td>
                          <td>
                            <Link to={`/hotel/${hotel.id}`}>
                              <FaEye />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>

                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Link to="/novohotel">
          <Button>Novo hotel</Button>
        </Link>
      </div>
    </>
  );
}

export default Hotel;
