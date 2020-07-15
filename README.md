# vue-global-registration

Register global Vue components with require.context.

## How to use

```js
import Vue from 'vue'
import globalRegistration from '@sqrtthree/vue-global-registration'

globalRegistration(
  require.context('./components', true, /[a-zA-Z]\w+\.(vue|js)$/)
)(Vue)
```
