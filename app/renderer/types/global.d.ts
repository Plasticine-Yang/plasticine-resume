// CSS modules
type CSSModuleClasses = { readonly [key: string]: string }

declare module '*.module.scss' {
  const classes: CSSModuleClasses
  export default classes
}

// CSS
declare module '*.scss' {
  const css: Record<string, never>
  export default css
}

// images
declare module '*.png' {
  const src: string
  export default src
}
declare module '*.jpg' {
  const src: string
  export default src
}
declare module '*.jpeg' {
  const src: string
  export default src
}
declare module '*.gif' {
  const src: string
  export default src
}
declare module '*.svg' {
  const src: string
  export default src
}
declare module '*.ico' {
  const src: string
  export default src
}
declare module '*.webp' {
  const src: string
  export default src
}
