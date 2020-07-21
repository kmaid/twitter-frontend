/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddRemoveCategoryToUser
// ====================================================

export interface AddRemoveCategoryToUser_addRemoveCategoryToUser_categories {
  __typename: "Category";
  id: string;
  name: string;
}

export interface AddRemoveCategoryToUser_addRemoveCategoryToUser_userData {
  __typename: "UserData";
  id: string;
  name: string;
  version: number;
}

export interface AddRemoveCategoryToUser_addRemoveCategoryToUser {
  __typename: "User";
  id: string;
  categories: AddRemoveCategoryToUser_addRemoveCategoryToUser_categories[];
  userData: AddRemoveCategoryToUser_addRemoveCategoryToUser_userData | null;
}

export interface AddRemoveCategoryToUser {
  addRemoveCategoryToUser: AddRemoveCategoryToUser_addRemoveCategoryToUser;
}

export interface AddRemoveCategoryToUserVariables {
  categoryId: number;
  userId: string;
  add: boolean;
}
