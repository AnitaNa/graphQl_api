const { UserList, MoviesList } = require('../mockData');
const _ = require('lodash');

const resolvers = {
    //QUERY
    Query: {
        // USER RESOLVERS
        users: () => {
            return UserList;
        },
        user: (parent, args ) =>  {
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        },

        // MOVIES RESOLVERS
        movies: () => {
            return MoviesList
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MoviesList, {name});
            return movie;
        }
    },
// RESOLVER
    User: {
        favoriteMovies: () => {
            return _.filter(MoviesList, (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2019 )
        }
    },
    Movie: {
        favoriteUser: () => {
        return _.filter(UserList, (user) => user.id === 2 )
    }
},
// MUTATIONS
Mutation: {
    createUser: (parent, args) => {
        const newUser = args.input
        const lastId = UserList[UserList.length -1].id;  
        newUser.id = lastId + 1;
        UserList.push(newUser);
        return newUser;
    },
    updateUserName: (parent, args) => {
        const {id, newUserName} = args.input
        let userUpdate;
        UserList.forEach((user) => {
            if(user.id === Number(id)){
                user.username = newUserName;
                userUpdate = user
            }
        });
        return userUpdate;
    },
    
    deleteUser: (parent, args) => {
        const id = args.id;
        _.remove(UserList, (user) => {
            user.id === Number(id);
        });
        return null;
    }
}
};

module.exports = { resolvers };