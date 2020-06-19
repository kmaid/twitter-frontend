/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_USERS
// ====================================================

export interface GET_USERS_users_userData {
  __typename: "UserData";
  name: string;
  screenName: string;
  description: string | null;
  followersCount: number;
  friendsCount: number;
  profileImageUrlHttps: string;
}

export interface GET_USERS_users {
  __typename: "User";
  id: string;
  commercial: boolean;
  createdAt: any;
  excluded: boolean;
  updatedAt: any;
  userData: GET_USERS_users_userData | null;
}

export interface GET_USERS {
  users: GET_USERS_users[];
}
