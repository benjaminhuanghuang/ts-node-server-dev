import { MikroORM} from "@mikro-orm/core";
import { Post } from "../src/entities/Post";

export default
{
  migramtions :{
    path:'./migrations',
    pattern: /^[\w-]+\d+\.ts$/,
  },
  dbName: "lireddit",
  entities: [Post],
  user: "",
  password: "",
  type: "postgresql",
  debug: process.env.NODE_ENV !== "production",
} as Parameters<typeof MikroORM.init>[0]