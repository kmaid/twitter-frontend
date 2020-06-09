import React from "react";
import { Grid } from "@material-ui/core";
import { Layout } from "./Layout";

export function Home() {
  return (
    <Layout>
      <Grid container justify="center">
        <Grid spacing={4} alignItems="center" justify="center" container></Grid>
      </Grid>
    </Layout>
  );
}
