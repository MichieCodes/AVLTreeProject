import React from "react";
import ReactDOM from "react-dom";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

import App from "./App";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

const URI = window.location.protocol.indexOf('https') === 0 ? "http://avl-tree-project.herokuapp.com/graphql" : "http://localhost:8080/graphql";

const Client = new ApolloClient({uri: URI, cache: new InMemoryCache()});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
