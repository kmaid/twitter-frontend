/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUsersQuery
// ====================================================

export interface getUsersQuery_users_categories {
  __typename: "Category";
  id: string;
}

export interface getUsersQuery_users_userData {
  __typename: "UserData";
  name: string;
  screenName: string;
  description: string | null;
  followersCount: number;
  friendsCount: number;
  profileImageUrlHttps: string;
}

export interface getUsersQuery_users {
  __typename: "User";
  id: string;
  commercial: boolean;
  createdAt: any;
  excluded: boolean;
  updatedAt: any;
  friendsCrawled: any | null;
  categories: getUsersQuery_users_categories[];
  userData: getUsersQuery_users_userData | null;
}

export interface getUsersQuery {
  users: getUsersQuery_users[];
}
