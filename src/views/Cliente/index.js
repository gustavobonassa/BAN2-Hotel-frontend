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
import { getClientesRequest } from "store/modules/cliente/actions";
import { Link } from "react-router-dom";


const Cliente = () => {
  const dispatch = useDispatch();
  const clientes = useSelector(state => state.cliente.clientes);

  React.useEffect(() => {
    dispatch(getClientesRequest());
  }, [dispatch]);

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Clientes</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Nome</th>
                      <th>Telefone</th>
                      <th>RG</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientes.map((cliente, i) => (
                      <tr key={i}>
                        <td>{cliente.nome}</td>
                        <td>{cliente.telefone}</td>
                        <td>{cliente.rg}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Link to="/novocliente">
          <Button>Novo cliente</Button>
        </Link>
      </div>
    </>
  );
}

export default Cliente;
