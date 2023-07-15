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


export {GET_POSTS_BANNER, GET_HOT_POSTS}