import { gql } from "@apollo/client";

const GET_ALL_POSTS = gql`
    query Posts {
    posts(skip: 0, last: 100, orderBy: publishedAt_DESC) {
        title
        slug
        id
        coverPhoto {
        url
        }
        createdAt
        authorPost {
        ... on Author {
            name
            slug
            avatar {
            url
            }
        }
        }
    }
    }
`;


export {GET_ALL_POSTS}