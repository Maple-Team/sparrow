module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', '@typescript-eslint', 'prettier'],
  rules: {
    'import/prefer-default-export': 0,
    'prettier/prettier': ['error', { semi: false, singleQuote: true }],
    semi: [0, 'always'],
    'import/no-unresolved': 0,
    'import/extensions': [0, 'never'],
    'object-curly-newline': [
      0,
      {
        ObjectExpression: 'never',
        ObjectPattern: 'never',
        ImportDeclaration: 'never',
        ExportDeclaration: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
}
