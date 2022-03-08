const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const { books, authors } = require("./data");

const typeDefs = gql`
  type Author {
    id: ID
    name: String
    surname: String
    books:[Book]
  }

  type Book {
    id: ID
    title: String
    author: Author
    price: Float
    author_id: ID
  }

  type Query {
    books: [Book]
    book(id: ID): Book
    authors: [Author]
    author(id: ID): Author
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => {
      data = books.find((book) => book.id === args.id);
      return data;
    },
    authors: () => authors,
    author: (parent, args) => {
      data = authors.find((author) => author.id === args.id);
      return data;
    },
  },
  Book: {
    author: (parent) => {
      return authors.find((author) => author.id === parent.author_id);
    },
  },
  Author: {
    books: (parent) => {
        return books.filter(book=>book.author_id === parent.id)
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    }),
  ],
});

server.listen().then(({ url }) => console.log(`server is up ${url}`));
