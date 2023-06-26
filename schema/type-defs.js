const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
       id: ID!
       name: String!
       username: String
       nationality: Nationality!
       age: Int!
       friends: [User]
       favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
        favoriteUser: [User]
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie]!
        movie(name: String! ): Movie!
    }


    input CreateUserInput {
       name: String!
       username: String
       nationality: Nationality = USA
       age: Int!
    }

    input UpdateUserNameInput {
        id: ID!
        newUserName: String!
    }
  
    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUserName(input: UpdateUserNameInput!): User
        deleteUser(id: ID!): User
    }

    enum Nationality {
        CANADA
        BRAZIL
        USA
        GERMANY
        UK
    }

`;

module.exports = { typeDefs}