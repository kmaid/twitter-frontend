import React from "react";
import {
  Grid,
  Paper,
  Typography,
  withStyles,
  createStyles,
  Theme,
  WithStyles,
  Avatar,
  Checkbox,
} from "@material-ui/core";
import { GET_USERS_users } from "../typings/api/GET_USERS";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
const styles = (theme: Theme) =>
  createStyles({
    avatar: {
      height: 50,
      width: 50,
      marginRight: 10,
      marginBottom: 10,
    },
    avatarContainer: {
      display: "flex",
      flexDirection: "row",
    },
    statsContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      flexGrow: 1,
      justifyContent: "space-between",
    },
    statsFriendContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexBasis: "100%",
    },
    paper: {
      padding: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      color: theme.palette.text.secondary,
      minHeight: "190px",
    },
    actionButton: {
      textTransform: "uppercase",
      margin: theme.spacing(1),
      width: 152,
    },
  });

interface Props extends WithStyles<typeof styles> {
  user: GET_USERS_users;
}

const TwitterUser = (props: Props) => {
  const {
    classes,
    user: { userData, id: userId },
  } = props;

  if (!userData) {
    return (
      <Grid item sm={12} md={6} lg={4} xl={3}>
        <Paper className={classes.paper}>User Data missing for {userId}</Paper>
      </Grid>
    );
  }
  return (
    <Grid item sm={12} md={6} lg={4} xl={3}>
      <Paper className={classes.paper}>
        <div className={classes.avatarContainer}>
          <Avatar
            src={userData.profileImageUrlHttps}
            className={classes.avatar}
          />
          <div className={classes.statsContainer}>
            <Typography color="secondary" gutterBottom>
              {userData.name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/${userData.screenName}`}
              >
                @{userData.screenName}
              </a>
            </Typography>
            <div className={classes.statsFriendContainer}>
              <Typography variant="body2" gutterBottom>
                Followers: {userData.followersCount}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Ratio:{" "}
                {(userData.followersCount / userData.friendsCount).toFixed(2)}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Friends: {userData.friendsCount}
              </Typography>
            </div>
          </div>
        </div>
        {userData.description && (
          <Typography variant="body2" gutterBottom>
            {userData.description}
          </Typography>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checkedH"
          />
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checkedH"
          />
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checkedH"
          />
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checkedH"
          />
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checkedH"
          />
        </div>
      </Paper>
    </Grid>
  );
};
export default withStyles(styles)(TwitterUser);
