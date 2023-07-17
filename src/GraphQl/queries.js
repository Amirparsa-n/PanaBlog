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

const GET_News_POST = gql`
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

const GET_ALL_POSTS = gql`
query Posts {
  posts(skip: 0, first: 100, orderBy: publishedAt_DESC) {
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

const GET_POST_DETAILS = gql`
  query getPostDetails($slug: String!) {
  post(where: {slug: $slug}) {
    authorPost {
      ... on Author {
        avatar {
          url
        }
        name
        field
        slug
      }
    }
    category
    content {
      html
    }
    coverPhoto {
      url
    }
    title
    datePublished
  }
  
  posts(skip: 0, first: 4, orderBy: publishedAt_DESC) {
    title
    slug
    id
    coverPhoto {
      url
    }
  }
}
`;


export {
GET_POSTS_BANNER,
GET_HOT_POSTS,
GET_News_POST,
GET_ALL_AUTHOR,
GET_ALL_POSTS,
GET_POST_DETAILS,

}