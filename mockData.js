const UserList = [
    {
        id: 1,
        name: 'Mike',
        username: 'mJohn',
        nationality: 'USA',
        age: 20,
    },
    {
        id: 2,
        name: 'John',
        username: 'john001',
        nationality: 'BRAZIL',
        age: 30,
    },
    {
        id: 3,
        name: 'Steve',
        username: 'steve003',
        nationality: 'GERMANY',
        age: 22,
        friends: [
            {
                id: 5,
                name: 'Mark',
                username: '001Mark',
                nationality: 'UK',
                age: 28,
            },
            {
                id: 1,
                name: 'Mike',
                username: 'mJohn',
                nationality: 'USA',
                age: 20,
            },
        ]
    },
    {
        id: 4,
        name: 'Ali',
        username: 'Ali23',
        nationality: 'CANADA',
        age: 26,
    },
    {
        id: 5,
        name: 'Mark',
        username: '001Mark',
        nationality: 'UK',
        age: 28,
        friends: [
            {
                id: 2,
                name: 'John',
                username: 'john001',
                nationality: 'BRAZIL',
                age: 30,
            },
        ]
    }
]

const MoviesList = [
    {
        id: 1,
        name: 'XYZ',
        yearOfPublication: 2012,
        isInTheaters: false,
    },
    {
        id: 2,
        name: 'ABC',
        yearOfPublication: 2023,
        isInTheaters: true,
    },
    {
        id: 01,
        name: 'XXX',
        yearOfPublication: 2020,
        isInTheaters: false,
    },
    {
        id: 01,
        name: 'MNO',
        yearOfPublication: 2023,
        isInTheaters: true,
    }
]

module.exports = {UserList, MoviesList};