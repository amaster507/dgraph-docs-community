---
id: intro
sidebar_position: 1
title: What is Dgraph GraphQL?
---

# What is Dgraph GraphQL?

Dgraph will be the last GraphQL API you ever build, at least it is for me!

GraphQL is hard to do right at a production level, but Dgraph makes it easy.
Defining a schema with types and inputs is normally just the starting point to
building a GraphQL API.

Normally you have to still think about where the data is going to live, and how
the GraphQL API is going to read and write to that data-store (aka, resolvers).
Then you have to write middleware for authorization and access control. This
takes what started with a simple thought to make a easy to use API back to the
drawing table.

Production level GraphQL APIs also have to think about performance, scalability,
and iteration on schema changes.

With Dgraph you just define you schema types add a few directives and deploy and
the rest is taken care of for you.

Modeling your data could be this easy:

```GraphQL
# Draph v21.12
type User {
  id: ID!
  username: String! @id
  friends: [User]
  hobbies: [String] @search
  posts: [Post]
}
type Post {
  id: ID!
  for: User! @hasInverse(field:"posts")
  status: String! @search(by:[fulltext])
  likedBy: [User]
  created: Datetime! @search @default(add:{value:"$now"})
}
```

With Dgraph data modeling doesn’t have to be hard. And forming relationships
requires no pivot tables or foreign keys.

:::tip GraphQL can be easy!

With Dgraph GraphQL, you don't have to:

- Model Inputs
- Model Queries
- Model Mutations
- Model Payloads
- Write Resolvers
- Configure Cache
- Mitigate the N+1 Problem
- Worry about Over or Under fetching

Dgraph takes care of all of that for you!

:::

Dgraph allows you to focus on your model types and relationships and Dgraph
handles the rest. And by the rest we mean indexing, datatypes, inputs,
resolvers, and error handling. Load up a few simple GraphQL types and start
working immediately with a production ready GraphQL API.

## Isn't GraphQL an API Layer?

With almost every other GraphQL implementation you will find, the GraphQL API is
separated away from the database. GraphQL is usually a separate layer with it’s
own business logic and codebase. Commonly in the wild you will find Node.JS
GraphQL layers that Apollo Server has made popular. GraphQL is not specific to
any one programming language and database storage engine though.

Dgraph built their database engine from the ground up with GraphQL in mind. Then
in March 2020, Dgraph brought spec compliant GraphQL into the core of Dgraph.
With Dgraph, GraphQL is _not_ another layer, instead it is a managed endpoint to
the database itself.

## But GraphQL should be separate from the Database, right?

We could argue the theory of separating the API and DB into separate codebase,
but let’s help push Dgraph’s purpose forward instead.

The purpose of Dgraph is to prevent data silos and to provide a database that
scales to terabytes of data with billions of nodes. To achieve this scale and
performance, the “D” in Dgraph stands for Distributed. Dgraph is built to be
distributed. When Dgraph scales horizontally, so does the GraphQL endpoint.

With a Hight Availability (_HA_) configuration of Dgraph, you have at least 3
identical GraphQL endpoints that can be queried and accept mutations to the same
data.

:::tip HA vs. Distributed

High Availability decreases server load horizontally by making copies of the
same data across multiple servers. Distribution decreases server load
horizontally by splitting the data between groups of servers.

HA requires an odd number of servers (3+) to achieve a consensus.

To do HA and Distribution you would have a minimum of 6 servers in 2 groups.

:::

What would it take to scale both a database and a API at the same time
proportionately? Dgraph solves all of the problems with scaling, and allows you
to focus on your front-end development.

## Is a Dgraph really any better than a RDBMS or other NoSQL?

Yes! We could dive down into technicalities, but we can discuss those later.
What you need to know is that Dgraph delivers an API so you don’t have to worry
about ORMs, optimizing SQL, or managing a db AND an API. Dgraph is your complete
GraphQL solution. It is an All-in-One data store, db engine, and GraphQL API.
