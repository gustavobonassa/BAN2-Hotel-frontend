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
import { useDispatch } from "react-redux";
import { newHotelRequest } from "store/modules/hotel/actions";


const Hotel = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [rua, setRua] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [numero, setNumero] = React.useState("");

  const submitForm = () => {
    const hotelInfo = {
      nome, telefone, rua, bairro, cidade, estado, numero,
    }
    dispatch(newHotelRequest(hotelInfo));
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Novo Hotel</CardTitle>
              </CardHeader>
              <CardBody>
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
                <FormGroup>
                  <Label for="telefone">Telefone</Label>
                  <Input
                    type="text"
                    id="telefone"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </FormGroup>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Rua</Label>
                      <Input
                        type="text"
                        placeholder="Rua"
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Número</Label>
                      <Input
                        type="text"
                        placeholder="Número"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Bairro</Label>
                      <Input
                        type="text"
                        placeholder="Bairro"
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Cidade</Label>
                      <Input
                        type="text"
                        placeholder="Cidade"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label>Estado</Label>
                  <Input
                    type="text"
                    placeholder="Estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                  />
                </FormGroup>
                <Button onClick={() => submitForm()}>Enviar</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Hotel;
