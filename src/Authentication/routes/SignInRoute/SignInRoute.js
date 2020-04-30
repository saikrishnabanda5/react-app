import React from "react";
import {Route} from "react-router-dom";
import {
  SIGN_IN_PATH,
  PRODUCTS_PATH,
} from "../../constants/RouteConstants";

import SignInPage from '../../components/SignInPage/index.js';
import Products from   '../../../ECommerce/components/ProductsPage/index.js';

const routes = [
  <Route key={Math.random()}  path={SIGN_IN_PATH} component={SignInPage} />,
  <Route key={Math.random()}  path={PRODUCTS_PATH} component={Products} />,
];

export default routes;