import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";

import { Post } from "../entities/Post";
//
import { MyContext } from "src/types";

@Resolver(Post)
export class PostResolver {
  /*
  get post list
  */
  @Query(() => [Post])
  posts(@Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }

  @Query(() => Post, { nullable: true })
  post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
    return Post.findOne(id);
  }
  /*
  Create post
  */
  @Mutation(() => Post, { nullable: true })
  Post(@Arg("id", () => Int) id: number, @Ctx() { em }: MyContext): Promise<Post | null> {
    return Post.findOne(Post, { id });
  }
}
