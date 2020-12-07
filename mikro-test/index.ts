import { MikroORM } from "@mikro-orm/core";
import { Post } from "../src/entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  const post = orm.em.create(Post, { title: "Test " });
  await orm.em.persistAndFlush(post);
  await orm.em.nativeInsert(Post, { title: "Test 2 " });
};

main().catch((err) => {
  console.error(err);
});
