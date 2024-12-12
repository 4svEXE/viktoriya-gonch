import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'viktoriya-gonch',
  distFolder: './dist/viktoriya-gonch/browser',
  outDir: './dist/static',
  defaultPostRenderers: []
};
