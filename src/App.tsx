import React from "react";
import { client } from "./ApolloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";

export function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </ApolloProvider>
  );
}
