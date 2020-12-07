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



@Resolver(Post)
export class PostResolver {
  @Query(()=>[Post])
  posts(){
    return "bye"
  }
}