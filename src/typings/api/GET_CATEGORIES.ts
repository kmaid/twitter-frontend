/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_CATEGORIES
// ====================================================

export interface GET_CATEGORIES_categories {
  __typename: "Category";
  id: string;
  name: string;
  iconName: string;
  iconSelectedColor: string | null;
}

export interface GET_CATEGORIES {
  categories: GET_CATEGORIES_categories[];
}
