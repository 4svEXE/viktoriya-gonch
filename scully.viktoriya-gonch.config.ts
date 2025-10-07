import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'viktoriya-gonch',
  distFolder: './dist/viktoriya-gonch',
  outDir: './dist/static',
  defaultPostRenderers: [],
  puppeteerLaunchOptions: {
    timeout: 60000 // 60 секунд замість 30
  },
  routes: {
    '/bali': {
      type: 'ignored'
    }
  }
};
