import { type Options } from 'rehype-pretty-code';

const rehypePrettyCodeOptions: Partial<Options> = {
  // use a prepackaged theme
  theme: {
    dark: 'one-dark-pro',
    light: 'solarized-light',
  },
  onVisitHighlightedLine(node) {
    node.properties.className?.push('line--highlighted');
  },
};

export default rehypePrettyCodeOptions;
