import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  withStyles,
  createStyles,
  Theme,
  WithStyles,
  Avatar,
} from "@material-ui/core";
import { GET_USERS_users } from "../typings/api/GET_USERS";
const styles = (theme: Theme) =>
  createStyles({
    avatar: {
      height: 75,
      width: 75,
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    actionButton: {
      textTransform: "uppercase",
      margin: theme.spacing(1),
      width: 152,
    },
    box: {
      marginBottom: 40,
      height: 65,
    },
  });

interface Props extends WithStyles<typeof styles> {
  user: GET_USERS_users;
}

const TwitterUser = (props: Props) => {
  const { classes, user } = props;
  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Paper className={classes.paper}>
        <Avatar
          src={user.userData!.profileImageUrlHttps}
          className={classes.avatar}
        />
        <div className={classes.box}>
          <Typography
            style={{ textTransform: "uppercase" }}
            color="secondary"
            gutterBottom
          >
            {user.userData!.name}
          </Typography>
          <Typography variant="body2" gutterBottom>
            @{user.userData!.screenName}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            className={classes.actionButton}
          >
            Learn more
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};
export default withStyles(styles)(TwitterUser);
