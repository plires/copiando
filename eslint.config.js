import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      js,
      react: pluginReact,
    },
    settings: {
      react: {
        version: 'detect', // 👈 esto le dice al plugin que detecte automáticamente la versión de React
      },
    },
    ignores: ['node_modules', 'dist', 'build', 'vendor'], // 👈 aquí se reemplaza .eslintignore
    rules: {
      'no-unused-vars': 'warn',
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
  },

  prettier,
])
