import _ from 'lodash'

export default (context) => {
  return {
    install: (Vue) => {
      context.keys().forEach((fileName) => {
        // Get component config
        const componentConfig = context(fileName)
        // Get PascalCase name of component
        const componentName =
          componentConfig.default.name ||
          _.upperFirst(
            _.camelCase(
              // Strip the leading `./` and extension from the filename
              fileName.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$1')
            )
          )
        // Register component globally.
        Vue.component(
          componentName,
          // Look for the component options on `.default`, which will
          // exist if the component was exported with `export default`,
          // otherwise fall back to module's root.
          componentConfig.default || componentConfig
        )
      })
    },
  }
}
