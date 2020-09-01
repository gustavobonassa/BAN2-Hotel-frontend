import React from "react";
import Hotel from "views/Hotel";
import NovoHotel from "views/Hotel/NovoHotel.js";
import HotelInfo from "views/Hotel/HotelInfo.js";
import Cliente from "views/Cliente";
import NovoCliente from "views/Cliente/NovoCliente";
import { FaHotel, FaUser, FaRegUser } from "react-icons/fa"

import Login from "./views/Login";
import history from "./history";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import api from './services/api';
import { ConnectedRouter } from 'connected-react-router'

import AdminLayout from "layouts/Admin/Admin.js";
import NovoQuarto from "views/Quarto/NovoQuarto";
import NovoTipoQuarto from "views/TipoQuarto/NovoTipoQuarto";
import NovaReserva from "views/Reserva/NovaReserva";
import NovaEstadia from "views/Estadia/NovaEstadia";
import Empregado from "views/Empregado";
import NovoEmpregado from "views/Empregado/NovoEmpregado";

var routes = [
  {
    path: "/hotel",
    name: "Hoteis",
    icon: () => <FaHotel size={15} />,
    component: Hotel,
    layout: ""
  },
  {
    path: "/clientes",
    name: "Clientes",
    icon: () => <FaUser size={15} />,
    component: Cliente,
    layout: ""
  },
  {
    path: "/empregados",
    name: "Empregados",
    icon: () => <FaRegUser size={15} color="#fff" />,
    component: Empregado,
    layout: ""
  },
];

const Routes = () => {
  const signed = useSelector(state => state.auth.signed);
  const token = useSelector(state => state.auth.token);
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return (
    <ConnectedRouter history={history}>
      <Switch>
        {signed ? (
          <>
            <Route exact path="/hotel" render={props => <AdminLayout {...props} content={Hotel} />} />
            <Route exact path="/hotel/:id" render={props => <AdminLayout {...props} content={HotelInfo} />} />
            <Route exact path="/novohotel" render={props => <AdminLayout {...props} content={NovoHotel} />} />
            <Route exact path="/novoquarto/:id" render={props => <AdminLayout {...props} content={NovoQuarto} />} />
            <Route exact path="/novotipodequarto/:id" render={props => <AdminLayout {...props} content={NovoTipoQuarto} />} />
            <Route exact path="/novareserva/:id" render={props => <AdminLayout {...props} content={NovaReserva} />} />
            <Route exact path="/hotel/:idHotel/estadia/:id" render={props => <AdminLayout {...props} content={NovaEstadia} />} />
            <Route exact path="/clientes" render={props => <AdminLayout {...props} content={Cliente} />} />
            <Route exact path="/novocliente" render={props => <AdminLayout {...props} content={NovoCliente} />} />
            <Route exact path="/empregados" render={props => <AdminLayout {...props} content={Empregado} />} />
            <Route exact path="/novoempregado" render={props => <AdminLayout {...props} content={NovoEmpregado} />} />
            <Redirect exact from="/" to="/hotel" />
          </>
        ) : (
          <>
            <Redirect from="/" to="/login" />
            <Route path="/login" component={Login} />
          </>
        )}
      </Switch>
    </ConnectedRouter>
  );
};

export {
  Routes,
  history,
}

export default routes;
