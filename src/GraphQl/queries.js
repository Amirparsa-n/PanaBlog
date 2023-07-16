import { gql } from "@apollo/client";

const GET_POSTS_BANNER = gql`
    query Posts {
    posts(skip: 0, last: 100, orderBy: publishedAt_DESC) {
        title
        slug
        coverPhoto {
            url
        }
    }
    }
`;

const GET_HOT_POSTS = gql`
    query Posts {
    posts(skip: 0, last: 100, orderBy: publishedAt_DESC) {
        title
        slug
        id
        coverPhoto {
        url
        }
        content {
        html
        }
        datePublished
    }
    }
`;

const GET_ALL_POSTS = gql`
query Posts {
  posts(skip: 0, first: 10, orderBy: publishedAt_DESC) {
    title
    slug
    id
    content {
      html
    }
    coverPhoto {
      url
    }
    authorPost {
      ... on Author {
        id
        name
      }
    }
    category
  }
}
`;

const GET_ALL_AUTHOR = gql`
query MyQuery {
  authors {
    name
    id
    slug
    avatar {
      url
    }
    field
  }
}
`;


export {GET_POSTS_BANNER, GET_HOT_POSTS, GET_ALL_POSTS, GET_ALL_AUTHOR}