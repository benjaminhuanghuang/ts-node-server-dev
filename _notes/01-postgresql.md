## Setup mikro-orm
```
npm i @mikro-orm/cli @mikro-orm/core @mikro-orm/migrations @mikro-orm/postgresql pg
```


```
  npm i type-graphql typeorm
```

add config to package.json
```
  "mikro-orm": {
    "useTsNode": true,
    "configPaths": [
      "./src/mikro-orm.config.ts",
      "./dist/mikro-orm.config.js"
    ]
  }
```


## Mikro-orm
```
  npx mikiro-orm migration:create --run 
```