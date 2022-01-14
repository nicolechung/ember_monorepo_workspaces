# Ember monorepo with yarn workspaces


## Root package.json

Must contain:
```json
 "private": true,
 "workspaces": {
    "packages": [
      "packages/**/*",
      "frontend" 
    ]
  },
```

### packages
For ember addons use star/glob pattern (`/**/*`). This will tell yarn workspaces to look inside the sub-folders of `packages` and link any node_modules as needed.

### frontend
This is your app. For this do not use a `*`. This will cause your monorepo to not work, as running `yarn install` from the root will not install `node_modules` into your frontend app.
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