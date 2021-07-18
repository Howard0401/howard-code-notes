/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.md" {
  const value: string;
  export default value;
}

declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/preview'
// declare module '@kangc/v-md-editor/lib/theme/vuepress.js';
declare module '@kangc/v-md-editor/lib/theme/github.js'
declare module 'codemirror'
declare module 'vue3-markdown-it'
