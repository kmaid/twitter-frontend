/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: setUserExcludedMutation
// ====================================================

export interface setUserExcludedMutation_setUserExcluded_categories {
  __typename: "Category";
  id: string;
}

export interface setUserExcludedMutation_setUserExcluded_userData {
  __typename: "UserData";
  name: string;
  screenName: string;
  description: string | null;
  followersCount: number;
  friendsCount: number;
  profileImageUrlHttps: string;
}

export interface setUserExcludedMutation_setUserExcluded {
  __typename: "User";
  id: string;
  commercial: boolean;
  createdAt: any;
  excluded: boolean;
  updatedAt: any;
  friendsCrawled: any | null;
  categories: setUserExcludedMutation_setUserExcluded_categories[];
  userData: setUserExcludedMutation_setUserExcluded_userData | null;
}

export interface setUserExcludedMutation {
  setUserExcluded: setUserExcludedMutation_setUserExcluded;
}

export interface setUserExcludedMutationVariables {
  userId: string;
  excluded: boolean;
}
