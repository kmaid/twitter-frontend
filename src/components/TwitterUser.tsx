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
  Icon,
  IconButton,
} from "@material-ui/core";
import { GET_USERS_users } from "../typings/api/GET_USERS";
import { MaterialIconCheckbox } from "./MaterialIconCheckbox";
import { red } from "@material-ui/core/colors";
import classNames from "classnames";
import { GET_CATEGORIES_categories } from "../typings/api/GET_CATEGORIES";
import { gql } from "@apollo/client";

const SET_CATEGORIES_QUERY = gql`
mutation SET_CATEGORY
`;

const setCategory = (userId: number, categoryId: number) => {};

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
    categoryContainer: {
      display: "flex",
      justifyContent: "space-between",
      flex: 1,
      alignItems: "flex-end",
    },
    iconButton: { width: 42, height: 42 },
    iconButtonActive: {
      color: theme.palette.primary.main,
    },
  });

interface Props extends WithStyles<typeof styles> {
  user: GET_USERS_users;
  categories: GET_CATEGORIES_categories[];
}

const TwitterUser = (props: Props) => {
  const {
    classes,
    user: {
      userData,
      id: userId,
      categories: userCategories,
      friendsCrawled,
      excluded,
    },
    categories,
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
        <div className={classes.categoryContainer}>
          <IconButton className={classes.iconButton}>
            <Icon
              className={classNames({
                [classes.iconButtonActive]: !!friendsCrawled,
              })}
            >
              people_alt
            </Icon>
          </IconButton>
          <MaterialIconCheckbox
            materialUiIcon="block"
            defaultChecked={excluded}
            checkedColor={red[600]}
          />
          {categories.map((category) => (
            <MaterialIconCheckbox
              key={category.id}
              materialUiIcon={category.iconName}
              onClick={() => {
                alert(`${category.name}`);
              }}
              defaultChecked={userCategories.some(
                (uc) => uc.id === category.id
              )}
              checkedColor={
                category.iconSelectedColor
                  ? category.iconSelectedColor
                  : undefined
              }
            />
          ))}
        </div>
      </Paper>
    </Grid>
  );
};
export default withStyles(styles)(TwitterUser);
