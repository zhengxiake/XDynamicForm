import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@xia/xform',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // mfsu: {},
  // more config: https://d.umijs.org/config
  theme: {
    '@hd': '0.02rem',
    // '@alita-dform-title-font-size': '0.3rem',
    // '@alita-dform-value-color': 'blue',
    // '@alita-dform-placeholder': '#1DA57A',
    // '@color-text-disabled': '#FF4D6A',
    // '@alita-dform-height': '1rem',
    // '@alita-dform-value-font-size': '0.2rem',
  },
});
