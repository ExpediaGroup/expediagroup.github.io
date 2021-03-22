const {ApolloClient, gql, HttpLink, InMemoryCache} = require("@apollo/client")
const fetch = require("cross-fetch")
const fs = require("fs");


const repoNames = [
    { owner: "ExpediaGroup", name: "beekeeper" },
    { owner: "ExpediaGroup", name: "apiary" },
    { owner: "ExpediaGroup", name: "catalyst-render" },
    { owner: "ExpediaGroup", name: "catalyst-server" },
    { owner: "ExpediaGroup", name: "dr-shadow" },
    { owner: "ExpediaGroup", name: "drone-fly" },
    { owner: "ExpediaGroup", name: "flyte" },
    { owner: "ExpediaGroup", name: "fpsmeter" },
    { owner: "ExpediaGroup", name: "graphql-component" },
    { owner: "ExpediaGroup", name: "graphql-kotlin" },
    { owner: "ExpediaDotCom", name: "haystack" }
]

const githubClient = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api.github.com/graphql',
        fetch,
        headers: {
            Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`
        }
    }),
    cache: new InMemoryCache()
})

const QUERY_REPO_INFO = gql`
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      openGraphImageUrl
    }
  }`

async function fetchAndDumpRepoData() {
    const promises = repoNames.map(props =>
        githubClient.query({
            query: QUERY_REPO_INFO,
            variables: {
                owner : props.owner,
                name : props.name
            }
        }))
    const repoData = await Promise.all(promises).then(results => results.map(result => ({
            name: result.data.repository.name,
            description: result.data.repository.description,
            imageUrl: result.data.repository.openGraphImageUrl
        })))
    fs.writeFile("static/repos.json", JSON.stringify(repoData, null, 2), (err) => {
        if (err) {
            console.error("Failed to create repo file: ", err)
        }
    });
}

fetchAndDumpRepoData()