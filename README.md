# Node Typescript Starter
Super lightweight, unbiased boilerplate for node typescript projects.

## Development
Changes made in the `/src` directory will be hot reloaded. See `nodemon.json`:
```
{
  "ignore": ["test/*.ts", ".git", "node_modules", "dist"],
  "watch": ["src"],
  "exec": "npm start",
  "ext": "ts"
}
```

## Linting
> Are you using ECMAScript 6 features? Yes
> Are you using ES6 modules? Yes
> Where will your code run? Browser
> Do you use CommonJS? Yes
> Do you use JSX? Yes
> Do you use React? Yes
> What style of indentation do you use? Tabs
> What quotes do you use for strings? Single
> What line endings do you use? Unix
> Do you require semicolons? No

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


