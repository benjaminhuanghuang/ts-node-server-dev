
## setup 
```
  npm i express apollo-server-express graphql type-graphql

  npm i -D @types/express
```

```
import {ApolloServer} from 'apollo-server-express'
```


Resolver
```
@Resolver(Post)
export class PostResolver {
  @Query(()=>[Post])
  posts(){
    return "bye"
  }
}
```