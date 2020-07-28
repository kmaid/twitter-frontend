/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCategoriesQuery
// ====================================================

export interface getCategoriesQuery_categories {
  __typename: "Category";
  id: string;
  name: string;
  iconName: string;
  iconSelectedColor: string | null;
}

export interface getCategoriesQuery {
  categories: getCategoriesQuery_categories[];
}
