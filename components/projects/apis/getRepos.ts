import React from "react";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


function extractLanguage(element: any) {
  const edges = element.edges;

  const languages = edges.map((temp: any) => {
    return temp.node.name;
  });

  return languages;
}

function extractName(name: string) {
  const capitalized = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return capitalized;
}

export const getStaticProps = async () => {

  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = process.env.GITHUB_ACCESS_TOKEN;

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "saikot-paul") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                object(expression: "HEAD:README.md") {
                  ... on Blob {
                    text
                  }
                }
                languages(first: 10) {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems;
  const nodes = pinnedItems.nodes;

  const gitRepos = nodes.map((element: any) => {
    const lang = extractLanguage(element.languages);
    const name = extractName(element.name);
    const readme = element.object.text;

    return {
      languages: lang,
      name: name,
      readme: readme,
    };
  });

  return gitRepos;
};

