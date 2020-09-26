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
import { getEmpregadosRequest } from "store/modules/empregado/actions";
import { Link } from "react-router-dom";


const Empregado = () => {
  const dispatch = useDispatch();
  const empregados = useSelector(state => state.empregado.empregados);
  React.useEffect(() => {
    dispatch(getEmpregadosRequest());
  }, [dispatch]);

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Empregados</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Nome</th>
                      <th>RG</th>
                      <th>Hotel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {empregados.length && (empregados || []).map((empregado, i) => (
                      <tr key={i}>
                        <td>{empregado.nome}</td>
                        <td>{empregado.rg}</td>
                        <td>{empregado.nomehotel}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Link to="/novoempregado">
          <Button>Novo empregado</Button>
        </Link>
      </div>
    </>
  );
}

export default Empregado;
