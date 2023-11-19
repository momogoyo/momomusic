/// <reference types="vite/client" />

// https://stackoverflow.com/questions/42002394/importing-vue-components-in-typescript-file
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}