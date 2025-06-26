/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import path from 'path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig(({ mode }) => {
  const isLibraryBuild = mode === 'lib';

  return {
    plugins: [
      react(),
      tailwindcss(),
      ...(isLibraryBuild ? [dts({ 
        tsconfigPath: './tsconfig.lib.json',
        insertTypesEntry: true
      })] : [])
    ],
    ...(isLibraryBuild ? {
      build: {
        lib: {
          entry: path.resolve(process.cwd(), 'src/index.ts'),
          name: 'SonomaUI',
          formats: ['es', 'cjs'],
          fileName: (format) => `index.${format === 'es' ? 'es' : 'cjs'}.js`
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react/jsx-runtime': 'react/jsx-runtime'
            }
          }
        },
        copyPublicDir: false
      }
    } : {}),
    test: {
      environment: 'jsdom',
      setupFiles: ['./src/test-setup.ts'],
      globals: true,
      projects: [{
        extends: true,
        plugins: [
        // The plugin will run tests for the stories defined in your Storybook config
        // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
        storybookTest({
          configDir: path.join(process.cwd(), '.storybook')
        })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{
              browser: 'chromium'
            }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }]
    }
  };
});