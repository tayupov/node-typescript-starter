# Node Typescript Starter
Super lightweight, unbiased boilerplate for node typescript projects.

## Get started

#### Clone the repository:
```
$ git clone git@github.com:tayupov/node-typescript-starter.git
```
#### Install dependencies:
```
$ cd node-typescript-starter
$ npm install
```

## Development

#### Start the project by running:
```
$ npm run dev
```
Changes made in the `/src` directory will be hot reloaded. See the `nodemon.json` file.

## Linting
| Feature       |     Option    |
| ------------- | ------------- |
| ECMAScript 6  |      Yes      |
| ES6 modules   |      Yes      |
| Environment   |      Node     |
| CommonJS      |      Yes      |
| JSX           |      Yes      |
| React         |      Yes      |
| Indentation   |      Tabs     |
| Quotes        |      Single   |
| Line endings  |      Unix     |
| Semicolons    |      No       |

For adjustments edit `.eslintrc.json`. Makes use of `typescript-eslint-parser`, see:  
https://github.com/eslint/typescript-eslint-parser

## Testing
This starter makes use of the mocha test framework and chai assertion library.
Tests are defined in `/test` and can be run with:
```
$ npm test
```

## Precommit
`git add` and `git commit` will run precommit hooks defined in the `package.json`:

```
{
  ...
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "prettier --parser typescript --write", "git add"
    ]
  }
}
```


