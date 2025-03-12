// File: src/types/mdx.d.ts
// This file adds TypeScript declaration for MDX files

declare module '*.mdx' {
    const MDXComponent: (props: any) => JSX.Element;
    export default MDXComponent;
  }