import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    //client -> server 로 요청전달
    headers: {
        Authorization: `Bearer ${localStorage.getItem("토근 넣을곳")}`,
    },
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    isLogin: {
                        read: () => {
                            return localStorage.getItem("ACCESS_TOKEN") === null ? false : true;
                        },
                    },
                },
            },
        },
    }),
    resolvers: {
        Mutation: {
            logUserIn: (_, __, { cache }) => {
                console.log(__, cache);
                cache.writeQuery({
                    query: gql`
                        {
                            isLogin @client
                        }
                    `,
                    data: {
                        isLogin: true,
                    },
                });
            },
        },
    },
});

export default client;
