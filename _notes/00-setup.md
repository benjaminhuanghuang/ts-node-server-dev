
## Solution 1: ts-node

typescript for node
```
  npm i @types/node typescript ts-node -D
```

npm script
```
  "start" : "ts-node src/index.ts"
  "dev:start" : "nodemon --exec ts-node src/index.ts"
```
downside of ts-node: SLOW

## Solution 2: compile .ts file to dist folder and run
```
  npm i @types/node typescript nodemon -D
```

npm script
```
  "watch" : "tsc -w",
  "start" : "node dist/index.js"
  "dev:start" : "nodemon dist/index.js"
```


## Create tsconfig.json
```
  npx tsconfig.json
```
