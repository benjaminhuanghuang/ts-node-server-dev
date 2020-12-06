import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
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
};

main();
