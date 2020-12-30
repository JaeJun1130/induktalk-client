import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4001/graphql",
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
                            return localStorage.getItem("ACCESS_TOKEN") === null ? false : true; //isLogin 을 read 해서 토근값이 있으면 true
                        },
                    },
                },
            },
        },
    }),
    resolvers: {
        Mutation: {
            logUserIn: (_, __, { cache }) => {
                cache.writeQuery({
                    query: gql`
                        {
                            isLogin @client #Cache 값에서 isLogin의 값을 빼오는 resolver
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
