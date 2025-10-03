import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'viktoriya-gonch',
  distFolder: './dist/viktoriya-gonch',
  outDir: './dist/static',
  defaultPostRenderers: [],
  puppeteerLaunchOptions: {
    timeout: 9960000
  },
  routes: {
    '/bali': {
      type: 'ignored'
    },
    '/about-year-calendar': { type: 'default' },
    '/presentations': { type: 'default' },
    '/me': { type: 'default' }
  }
};
