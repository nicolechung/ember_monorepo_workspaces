# Ember monorepo with yarn workspaces


## Root package.json

Must contain:
```json
 "private": true,
 "workspaces": {
    "packages": [
      "packages/**/*", // for ember addons use star/glob pattern
      "frontend" // for an ember app link directly, no star (*)
    ]
  },
```
## Dos

✅ Do add new dependencies to any `package.json`, but then `yarn install` from the root directory.

✅ Do change any `app` re-exports to use `@package/name/my-component`

Example:

If your addon package.json has this name:
```
"name": "@nicole/button",
```

Make sure app/components/nicole-button.js looks like this:
```js
export { default } from '@nicole/button/components/nicole-button';
```


## Don'ts

❌ Don't `yarn install` inside either `frontend` or `packages/**/*`. Only `yarn install` from the root!