https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html
https://brianflove.com/2016/11/11/typescript-2-express-mongoose-mocha-chai/

TypeScript with Node.js

TypeScript has had first class support for Node.js since inception. Here's how to setup a quick Node.js project:

Note: many of these steps are actually just common practice Node.js setup steps

Setup a Node.js project package.json. Quick one : npm init -y
Add TypeScript (npm install typescript --save-dev)
Add node.d.ts (npm install @types/node --save-dev)
Init a tsconfig.json for TypeScript options with a few key options in your tsconfig.json (npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs)
That's it! Fire up your IDE (e.g. code .) and play around. Now you can use all the built in node modules (e.g. import * as fs from 'fs';) with all the safety and developer ergonomics of TypeScript!

All your TypeScript code goes in src and the generated JavaScript goes in lib.

Bonus: Live compile + run

Add ts-node which we will use for live compile + run in node (npm install ts-node --save-dev)
Add nodemon which will invoke ts-node whenever a file is changed (npm install nodemon --save-dev)
Now just add a script target to your package.json based on your application entry e.g. assuming its index.ts:

  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
  },
So you can now run npm start and as you edit index.ts:+

nodemon reruns its command (ts-node)
ts-node transpiles automatically picking up tsconfig.json and the installed TypeScript version,
ts-node runs the output JavaScript through Node.js.
And when you are ready to deploy your JavaScript application run npm run build.

