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
import { getUsersQuery_users } from "../typings/api/getUsersQuery";
import { MaterialIconCheckbox } from "./MaterialIconCheckbox";
import { red } from "@material-ui/core/colors";
import classNames from "classnames";
import { getCategoriesQuery_categories } from "../typings/api/getCategoriesQuery";
import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";
import {
  setUserCategoryMutation,
  setUserCategoryMutationVariables,
} from "../typings/api/setUserCategoryMutation";
import {
  setUserExcludedMutation,
  setUserExcludedMutationVariables,
} from "../typings/api/setUserExcludedMutation";
import {
  crawlFriendsMutation,
  crawlFriendsMutationVariables,
} from "../typings/api/crawlFriendsMutation";
const SET_CATEGORY_MUTATION = loader("../graphql/setUserCategory.graphql");
const SET_EXCLUDED_MUTATION = loader("../graphql/setUserExcluded.graphql");
const CRAWL_FRIENDS_MUTATION = loader("../graphql/crawlFriends.graphql");

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
  user: getUsersQuery_users;
  categories: getCategoriesQuery_categories[];
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
  const [setCategory] = useMutation<
    setUserCategoryMutation,
    setUserCategoryMutationVariables
  >(SET_CATEGORY_MUTATION);
  const [setExcluded] = useMutation<
    setUserExcludedMutation,
    setUserExcludedMutationVariables
  >(SET_EXCLUDED_MUTATION);
  const [crawlFriends] = useMutation<
    crawlFriendsMutation,
    crawlFriendsMutationVariables
  >(CRAWL_FRIENDS_MUTATION);
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
          <IconButton
            onClick={() => crawlFriends({ variables: { userId } })}
            className={classes.iconButton}
          >
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
            checked={excluded}
            onChange={(event: React.FormEvent<HTMLInputElement>) => {
              setExcluded({
                variables: {
                  excluded: event.currentTarget.checked,
                  userId,
                },
              });
            }}
            checkedColor={red[600]}
          />
          {categories.map((category) => (
            <MaterialIconCheckbox
              key={category.id}
              materialUiIcon={category.iconName}
              onChange={(event: React.FormEvent<HTMLInputElement>) => {
                setCategory({
                  variables: {
                    add: event.currentTarget.checked,
                    categoryId: category.id,
                    userId,
                  },
                });
              }}
              checked={userCategories.some((uc) => uc.id === category.id)}
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
