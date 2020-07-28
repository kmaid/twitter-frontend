/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: setUserCategoryMutation
// ====================================================

export interface setUserCategoryMutation_setUserCategory_categories {
  __typename: "Category";
  id: string;
}

export interface setUserCategoryMutation_setUserCategory_userData {
  __typename: "UserData";
  name: string;
  screenName: string;
  description: string | null;
  followersCount: number;
  friendsCount: number;
  profileImageUrlHttps: string;
}

export interface setUserCategoryMutation_setUserCategory {
  __typename: "User";
  id: string;
  commercial: boolean;
  createdAt: any;
  excluded: boolean;
  updatedAt: any;
  friendsCrawled: any | null;
  categories: setUserCategoryMutation_setUserCategory_categories[];
  userData: setUserCategoryMutation_setUserCategory_userData | null;
}

export interface setUserCategoryMutation {
  setUserCategory: setUserCategoryMutation_setUserCategory;
}

export interface setUserCategoryMutationVariables {
  categoryId: string;
  userId: string;
  add: boolean;
}
