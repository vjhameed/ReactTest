import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Categories from "./pages/Categories";
import Products from "./pages/Products";

import DashboardLayout from "./pages/layout/DashboardLayout";

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard">
        <DashboardLayout>
          <Switch>
            <Route exact path="/dashboard/categories" component={Categories} />
            <Route exact path="/dashboard/products" component={Products} />
          </Switch>
        </DashboardLayout>
      </Route>
    </Switch>
  );
}
