const bestPracticeRules = {
  'block-scoped-var': 'error',
  'default-case-last': 'error',
  'grouped-accessor-pairs': 'error',
  'no-alert': 'error',
  'no-caller': 'error',
  'no-constructor-return': 'error',
  'no-else-return': 'warn',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-floating-decimal': 'error',
  'no-implicit-coercion': 'error',
  'no-implied-eval': 'error',
  'no-iterator': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 'error',
  'no-proto': 'error',
  'no-return-assign': 'error',
  'no-script-url': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-useless-call': 'error',
  'no-useless-concat': 'error',
  'no-useless-return': 'error',
  'prefer-named-capture-group': 'error',
  'prefer-regex-literals': 'error',
  'array-callback-return': [
    'error',
    { allowImplicit: true },
  ],
  'prefer-promise-reject-errors': [
    'error',
    { allowEmptyReject: true },
  ],
  curly: [
    'error',
    'multi-line',
  ],
  eqeqeq: 'error',
  yoda: 'error',
};
export { bestPracticeRules };
