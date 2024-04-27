module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,

  plugins: ['prettier-plugin-tailwindcss'],
  rules: {
    'react/jsx-space-between-diretives': ['error', { objects: 'never' }],
    
  },
};
