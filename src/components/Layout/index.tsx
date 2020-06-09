import React from "react";
import "./layout.css";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
interface LayoutProps {}

export function Layout(props: React.PropsWithChildren<LayoutProps>) {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div className="Layout">
        <Box pt={3}>{props.children}</Box>
      </div>
    </>
  );
}
