import eslintImportPlugin from 'eslint-plugin-import';
import eslintSimpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from './constants.mjs';

const imrt = {
    plugins: {
        '@import': eslintImportPlugin,
        '@simple-import-sort': eslintSimpleImportSortPlugin,
    },
    settings: {
        node: {
            'import/resolver': {
                node: {
                    extensions: [
                        ...JAVASCRIPT_FILES,
                    ],
                },
            },
        },
        ts: {
            ...eslintImportPlugin.configs.typescript.settings,
            'import/resolver': {
                ...eslintImportPlugin.configs.typescript.settings['import/resolver'],
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
        react: {
            ...eslintImportPlugin.configs.react.settings,
            'import/resolver': {
                ...eslintImportPlugin.configs.react.settings['import/resolver'],
                node: {
                    extensions: [
                        ...JAVASCRIPT_FILES,
                        ...TYPESCRIPT_FILES,
                    ],
                },
            },
        },
    },
    rules: {
        '@import/first': 'error',
        '@import/no-cycle': 'error',
        '@import/no-self-import': 'error',
        '@import/no-absolute-path': 'error',
        '@import/no-default-export': 'error',
        '@simple-import-sort/exports': 'error',
        '@import/no-relative-packages': 'warn',
        '@import/no-useless-path-segments': ['error'],
        '@import/no-extraneous-dependencies': [
            'error',
            { includeTypes: true },
        ],
        '@simple-import-sort/imports': [
            'error',
            {
                groups: [
                    [
                        '^react',
                        '^@?\\w',
                    ],
                    ['^@(demonicattack/.*|$)'],
                    ['^@(([\\/.]?\\w)|assets|test-utils)'],
                    ['^\\u0000'],
                    [
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./?$',
                    ],
                    [
                        '^\\./(?=.*/)(?!/?$)',
                        '^\\.(?!/?$)',
                        '^\\./?$',
                    ],
                    ['^.+\\.s?css$'],
                ],
            },
        ],
    },
};

export { imrt };
