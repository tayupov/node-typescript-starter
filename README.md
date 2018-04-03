# Node Typescript Starter

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

## Testing
This starter makes use of the mocha test framework and chai assertion library.
Tests are defined in `/test` and can be run with:
```
$ npm test
```


