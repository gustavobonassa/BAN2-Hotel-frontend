import React from "react";
import Hotel from "views/Hotel";
import NovoHotel from "views/Hotel/NovoHotel.js";
import HotelInfo from "views/Hotel/HotelInfo.js";
import Cliente from "views/Cliente";
import NovoCliente from "views/Cliente/NovoCliente";
import { FaHotel, FaUser } from "react-icons/fa"

import Login from "./views/Login";
import history from "./history";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import api from './services/api';
import { ConnectedRouter } from 'connected-react-router'

import AdminLayout from "layouts/Admin/Admin.js";
import NovoQuarto from "views/Quarto/NovoQuarto";

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
            <Route exact path="/clientes" render={props => <AdminLayout {...props} content={Cliente} />} />
            <Route exact path="/novocliente" render={props => <AdminLayout {...props} content={NovoCliente} />} />
            {/* <Redirect exact path="/" to="/hotel" /> */}
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
