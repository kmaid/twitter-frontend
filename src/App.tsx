import React from "react";
import { client } from "./ApolloClient";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Layout } from "./components/Layout";
import { blue, indigo } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900],
    },
    primary: {
      main: indigo[700],
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', "sans-serif"].join(","),
  },
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Layout title="Home">
                <Home />
              </Layout>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}
