[![npm](https://img.shields.io/npm/v/@sqrtthree/vue-global-registration)](https://www.npmjs.com/package/@sqrtthree/vue-global-registration)

# vue-global-registration

Register global Vue components with require.context.

## How to use

```sh
yarn add @sqrtthree/vue-global-registration

# or use npm
npm install @sqrtthree/vue-global-registration
```

```js
import Vue from 'vue'
import globalRegistration from '@sqrtthree/vue-global-registration'

globalRegistration(
  require.context('./components', true, /[a-zA-Z]\w+\.(vue|js)$/)
)(Vue)
```

---

> [sqrtthree.com](https://sqrtthree.com/) &nbsp;&middot;&nbsp;
> GitHub [@sqrthree](https://github.com/sqrthree) &nbsp;&middot;&nbsp;
> Twitter [@sqrtthree](https://twitter.com/sqrtthree)
