module.exports = {
  overrides: [
    {
      files: ['*.js'],
      parserOptions: {
        ecmaVersion: 'latest',
      },
      extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
      env: {
        node: true,
        commonjs: true,
        es2024: true,
      },
    },
    {
      files: ['*.mjs'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
      env: {
        node: true,
        commonjs: false,
        es2024: true,
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: 'tsconfig.json',
          },
        },
      },
      rules: {
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            pathGroups: [
              {
                pattern: '@disboard/**',
                group: 'internal',
              },
              {
                pattern: '@bufbuild/**',
                group: 'external',
              },
              {
                pattern: '@connectrpc/**',
                group: 'external',
              },
              {
                pattern: '@headlessui/**',
                group: 'external',
              },
              {
                pattern: '@redis/**',
                group: 'external',
              },
              {
                pattern: '@**/**',
                group: 'internal',
              },
              {
                pattern: '@*',
                group: 'internal',
              },
            ],
            pathGroupsExcludedImportTypes: ['type'],
          },
        ],
        'import/consistent-type-specifier-style': 'error',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/prefer-literal-enum-member': [
          'error',
          {
            allowBitwiseExpressions: true,
          },
        ],
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/sort-type-constituents': 'error',
      },
    },
    {
      files: ['*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'next/core-web-vitals',
        'prettier',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: 'tsconfig.json',
          },
        },
        next: {
          rootDir: __dirname,
        },
      },
      env: {
        node: false,
        browser: true,
      },
      rules: {
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            pathGroups: [
              {
                pattern: '@*',
                group: 'internal',
              },
            ],
            pathGroupsExcludedImportTypes: ['type'],
          },
        ],
        'import/consistent-type-specifier-style': 'error',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/prefer-literal-enum-member': [
          'error',
          {
            allowBitwiseExpressions: true,
          },
        ],
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/sort-type-constituents': 'error',
      },
    },
  ],
};
