import eslintJsPlugin from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPrettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { comments } from './configs/comments.mjs';
import { ECMA_VERSION, EXCLUDE_PATTERNS, JAVASCRIPT_FILES, TYPESCRIPT_FILES } from './configs/constants.mjs';
import { imrt } from './configs/import.mjs';
import { js } from './configs/js.mjs';
import { jsxA11y } from './configs/jsx-a11y.mjs';
import { next } from './configs/next.mjs';
import { noComments } from './configs/no-comments.mjs';
import { perfectionist } from './configs/perfectionist.mjs';
import { promise } from './configs/promise.mjs';
import { react } from './configs/react.mjs';
import { regexp } from './configs/regexp.mjs';
import { tailwind } from './configs/tailwind.mjs';
import { ts } from './configs/ts.mjs';
import { unicorn } from './configs/unicorn.mjs';

const nxt = tseslint.config(
    {
        plugins: {
            '@prettier': eslintPrettierPlugin,
            ...js.plugins,
            ...ts.plugins,
            ...react.plugins,
            ...perfectionist.plugins,
            ...comments.plugins,
            ...noComments.plugins,
            ...imrt.plugins,
            ...unicorn.plugins,
            ...regexp.plugins,
            ...promise.plugins,
            ...jsxA11y.plugins,
            ...next.plugins,
            ...tailwind.plugins,
        },
    },
    {
        ignores: [
            ...EXCLUDE_PATTERNS,
        ],
    },
    {
        files: [
            ...JAVASCRIPT_FILES,
            ...TYPESCRIPT_FILES,
        ],
    },
    {
        settings: {
            ...perfectionist.settings,
            ...react.settings,
            ...imrt.settings.react,
            ...imrt.settings.ts,
        },
        extends: [
            eslintJsPlugin.configs.recommended,
            tseslint.configs.eslintRecommended,
            next.extends,
            ...tseslint.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            ...tseslint.configs.strictTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        rules: {
            '@prettier/prettier': 'error',
            ...js.rules,
            ...ts.rules,
            ...perfectionist.rules,
            ...comments.rules,
            ...noComments.rules,
            ...imrt.rules,
            ...unicorn.rules,
            ...regexp.rules,
            ...promise.rules,
            ...react.rules,
            ...jsxA11y.rules,
            ...next.rules,
            ...tailwind.rules,
        },
        languageOptions: {
            ...react.languageOptions,
            ...jsxA11y.languageOptions,
            ...tailwind.languageOptions,
            sourceType: 'module',
            ecmaVersion: ECMA_VERSION,
            globals: {
                ...globals.es5,
                ...globals.browser,
                ...globals.node,
                ...globals.serviceworker,
                JSX: true,
                React: true,
            },
            parserOptions: {
                projectService: true,
                warnOnUnsupportedTypeScriptVersion: false,
                ecmaFeatures: {
                    jsx: true,
                },
                cacheLifetime: {
                    glob: 'Infinity',
                },
            },
        },
    },
    {
        rules: {
            '@import/no-default-export': 'off',
            '@react/react-in-jsx-scope': 'off',
        },
        files: [
            'src/app/**/{page,layout,not-found,error,loading}.tsx',
            'src/app/{sitemap,robots}.ts',
            'app/**/{page,layout,not-found,error,loading}.tsx',
            'app/{sitemap,robots}.ts',
            'middleware.ts',
        ],
    },
    {
        extends: [tseslint.configs.disableTypeChecked],
        files: [
            ...JAVASCRIPT_FILES,
        ],
    },
    eslintConfigPrettier,
);

export default nxt;
