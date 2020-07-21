/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: setCategory
// ====================================================

export interface setCategory_addRemoveCategoryToUser_categories {
  __typename: "Category";
  id: string;
  name: string;
}

export interface setCategory_addRemoveCategoryToUser_userData {
  __typename: "UserData";
  id: string;
  name: string;
  version: number;
}

export interface setCategory_addRemoveCategoryToUser {
  __typename: "User";
  id: string;
  categories: setCategory_addRemoveCategoryToUser_categories[];
  userData: setCategory_addRemoveCategoryToUser_userData | null;
}

export interface setCategory {
  addRemoveCategoryToUser: setCategory_addRemoveCategoryToUser;
}
