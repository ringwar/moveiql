const people = [
    {
        name: "zebar",
        age: 20,
        gender: "female"
    }
];

const resolvers = {
    Query: {
        people: () => people
    }
};

export default resolvers;