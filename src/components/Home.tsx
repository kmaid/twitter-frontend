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
import { gql, useQuery } from "@apollo/client";
import { GET_USERS } from "../typings/api/GET_USERS";
import { GET_CATEGORIES } from "../typings/api/GET_CATEGORIES";
const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.grey["100"],
      overflow: "hidden",
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
      id
      commercial
      createdAt
      excluded
      updatedAt
      friendsCrawled
      categories {
        id
      }
      userData {
        name
        screenName
        description
        followersCount
        friendsCount
        profileImageUrlHttps
      }
    }
    categories {
      id
      name
      iconName
      iconSelectedColor
    }
  }
`;

export const GET_CATEGORIES_QUERY = gql`
  query GET_CATEGORIES {
    categories {
      id
      name
      iconName
      iconSelectedColor
    }
  }
`;

const Home = (props: Props) => {
  const { classes } = props;
  const { loading: userLoading, data: userData } = useQuery<GET_USERS>(
    GET_USERS_QUERY
  );
  const { loading: categoriesLoading, data: categoriesData } = useQuery<
    GET_CATEGORIES
  >(GET_CATEGORIES_QUERY);
  return (
    <Grid container justify="center">
      {(userLoading || categoriesLoading) && <LinearProgress />}
      {userData && categoriesData && (
        <Grid
          spacing={4}
          alignItems="center"
          justify="center"
          container
          className={classes.grid}
        >
          {userData.users.map((user) => (
            <TwitterUser
              key={user.id}
              user={user}
              categories={categoriesData.categories}
            />
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default withStyles(styles)(Home);
