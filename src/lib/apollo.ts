import { ApolloClient, InMemoryCache } from "@apollo/client";

export const  client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4ouz32y11fl01xx5keu682o/master',
    cache: new InMemoryCache()
})