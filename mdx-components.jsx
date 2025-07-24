import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'

const MDXComponents = getDocsMDXComponents({
  // 自定义组件可以在这里添加
})

export function useMDXComponents(components) {
  return {
    ...MDXComponents,
    ...components,
  }
}
