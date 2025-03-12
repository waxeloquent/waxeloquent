// File: src/components/mdx/MDXComponents.tsx

import React from 'react';
import { MDXProvider } from '@mdx-js/react';

// Define type for the components
interface MDXComponents {
  [key: string]: React.ComponentType<any>;
}

// Custom components for MDX content
const components: MDXComponents = {
  h1: (props) => <h1 className="font-heading text-3xl mb-6" {...props} />,
  h2: (props) => <h2 className="font-heading text-2xl mt-8 mb-4" {...props} />,
  h3: (props) => <h3 className="font-heading text-xl mt-6 mb-3" {...props} />,
  p: (props) => <p className="mb-4 text-gray-700" {...props} />,
  ul: (props) => <ul className="mb-4 ml-6 list-disc" {...props} />,
  ol: (props) => <ol className="mb-4 ml-6 list-decimal" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  a: (props) => <a className="text-primary hover:text-secondary underline" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
  ),
  code: (props) => (
    <code className="bg-gray-100 text-primary px-1 rounded text-sm" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-6 text-sm" {...props} />
  ),
  // You can add more custom components here
};

interface MDXComponentsProviderProps {
  children: React.ReactNode;
}

export function MDXComponentsProvider({ children }: MDXComponentsProviderProps) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}