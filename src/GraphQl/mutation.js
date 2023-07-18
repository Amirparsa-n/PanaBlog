import { gql } from "@apollo/client";

const CREATE_COMMENT = gql`
mutation createComment(
    $userName: String!
    $email: String!
    $text: String!
    $slug: String!
    ) {
    createComment(
        data: {
            name: $userName
            email: $email 
            text: $text 
            post: {connect: {slug: $slug}}
        }
    ) {
        id
        name
    }
}
`;


export {CREATE_COMMENT};