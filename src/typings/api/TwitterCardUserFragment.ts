/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TwitterCardUserFragment
// ====================================================

export interface TwitterCardUserFragment_categories {
  __typename: "Category";
  id: string;
}

export interface TwitterCardUserFragment_userData {
  __typename: "UserData";
  name: string;
  screenName: string;
  description: string | null;
  followersCount: number;
  friendsCount: number;
  profileImageUrlHttps: string;
}

export interface TwitterCardUserFragment {
  __typename: "User";
  id: string;
  commercial: boolean;
  createdAt: any;
  excluded: boolean;
  updatedAt: any;
  friendsCrawled: any | null;
  categories: TwitterCardUserFragment_categories[];
  userData: TwitterCardUserFragment_userData | null;
}
