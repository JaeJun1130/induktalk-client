import React from "react";
import Router from "./components/Router";
import GlobalStyles from "./styles/GlobalStyles";
import { SnackbarProvider } from "notistack";
import { ApolloProvider, gql, useQuery } from "@apollo/client";
import client from "./apollo/client";

function App() {
    return (
        <ApolloProvider client={client}>
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                <>
                    <Router />
                    <GlobalStyles />
                </>
            </SnackbarProvider>
        </ApolloProvider>
    );
}

export default App;
