import React from "react";
import {
  Grid,
  createStyles,
  Theme,
  WithStyles,
  withStyles,
  LinearProgress,
} from "@material-ui/core";
import TwitterUser from "./TwitterUser";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../typings/api/GET_USERS";
const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.grey["100"],
      overflow: "hidden",
      // background: `url(${backgroundShape}) no-repeat`,
      backgroundSize: "cover",
      backgroundPosition: "0 400px",
      paddingBottom: 200,
    },
    grid: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% - 20px)",
      },
    },
  });
interface Props extends WithStyles<typeof styles> {}

export const GET_USERS_QUERY = gql`
  query GET_USERS {
    users {
      commercial
      createdAt
      excluded
      updatedAt
      userData {
        name
        screenName
        description
        followersCount
        friendsCount
        profileImageUrlHttps
      }
    }
  }
`;

const Home = (props: Props) => {
  const { classes } = props;
  const { loading, data } = useQuery<GET_USERS>(GET_USERS_QUERY);
  return (
    <Grid container justify="center">
      {loading && <LinearProgress />}
      {data && (
        <Grid
          spacing={4}
          alignItems="center"
          justify="center"
          container
          className={classes.grid}
        >
          {data.users.map((user) => (
            <TwitterUser user={user} />
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default withStyles(styles)(Home);
