import React from "react";
import "./layout.css";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
interface LayoutProps {
  title: string;
}

export function Layout(props: React.PropsWithChildren<LayoutProps>) {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box pt={3}>{props.children}</Box>
    </>
  );
}
