import React from "react";
import {
  Grid,
  createStyles,
  Theme,
  WithStyles,
  withStyles,
  LinearProgress,
} from "@material-ui/core";
import TwitterUser from "../components/TwitterUser";
import { useQuery } from "@apollo/client";
import { getUsersQuery } from "../typings/api/getUsersQuery";
import { getCategoriesQuery } from "../typings/api/getCategoriesQuery";
import { loader } from "graphql.macro";
const GET_USERS_QUERY = loader("../graphql/getUsers.graphql");
const GET_CATEGORIES_QUERY = loader("../graphql/getCategories.graphql");

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
const Home = (props: Props) => {
  const { classes } = props;
  const { loading: userLoading, data: userData } = useQuery<getUsersQuery>(
    GET_USERS_QUERY
  );
  const { loading: categoriesLoading, data: categoriesData } = useQuery<
    getCategoriesQuery
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
