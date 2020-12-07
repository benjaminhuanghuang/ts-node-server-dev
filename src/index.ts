import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
//
import express from "express";
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql'
import {HelloResolver} from './resolvers/hello'

const main = async () => {
  const orm = await MikroORM.init({
    dbName: "lireddit",
    entities: [Post],
    user: "",
    password: "",
    type: "postgresql",
    debug: process.env.NODE_ENV !== "production",
  });

  const post = orm.em.create(Post, { title: "Test " });
  await orm.em.persistAndFlush(post);
  await orm.em.nativeInsert(Post, { title: "Test 2 " });

  // express server
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers:[HelloResolver],
      validate:false
    })
  })

  apolloServer.applyMiddleware({app});

  app.listen(8964, () => {
    console.log("server is running on 8964");
  });
}; 

main();
