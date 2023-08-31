module.exports = {
  extends: ['react-app', 'eslint:recommended'],
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        endOfLine: 'auto',
      },
    ],
  },
};
