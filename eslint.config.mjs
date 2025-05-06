import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'semi': ['error', 'always'], // Enforce semicolons at the end of statements
      'indent': ['error', 2, { 'SwitchCase': 1 }], // Enforce 2-space indentation, 1 for switch cases
      'comma-dangle': ['error', 'never'], // Disallow trailing commas
      'comma-spacing': ['error', { 'before': false, 'after': true }], // Require a space after, but not before, commas
      'space-before-blocks': 'error', // Require space before blocks
      'no-multiple-empty-lines': ['error', { 'max': 1 }], // Disallow multiple empty lines
      'object-curly-spacing': ['error', 'always'], // Require spacing inside curly braces
      'array-bracket-spacing': 'error', // Enforce consistent spacing inside array brackets
      'keyword-spacing': 'error', // Enforce consistent spacing before and after keywords
      'arrow-spacing': 'error', // Enforce consistent spacing before and after the arrow in arrow functions
      'space-infix-ops': 'error', // Require spacing around infix operators
      'no-console': 'warn', // Warn when using console.log or similar methods
      'no-useless-catch': 'off', // Allow catch blocks that only rethrow
      'jsx-quotes': ['error', 'prefer-double'], // Enforce double quotes for JSX attributes
      'space-in-parens': ['error', 'never'], // Disallow spaces inside parentheses
      'space-before-function-paren': ['error', 'never'], // Disallow space before function parenthesis
      '@/semi': 'error', // Enforce semicolons at the end of statements (custom rule)
      '@/space-before-blocks': 'error', // Require space before blocks (custom rule)
      '@/explicit-module-boundary-types': 'off', // Disable requiring explicit return types on functions and class methods (custom rule)
      '@/no-explicit-any': 'off', // Allow the use of the `any` type (custom rule)
      '@/quotes': [
        'error',
        'single',
        {
          'allowTemplateLiterals': true // Allow template literals even when enforcing single quotes (custom rule)
        }
      ],
      'quotes': ['error', 'single'], // Enforce single quotes for strings
      'eqeqeq': ['error', 'always'], // Enforce strict equality (===) instead of == and !=
      'no-unused-vars': 'warn', // Warn about variables that are declared but never used
      'react-hooks/rules-of-hooks': 'error', // Ensure hooks are only called inside functional components or custom hooks
      'react-hooks/exhaustive-deps': 'warn', // Ensure dependencies in useEffect, useCallback, and useMemo are properly defined
      'react/react-in-jsx-scope': 'off', // Disable the rule requiring React to be in scope when using JSX
      'react/jsx-wrap-multilines': ['error', {
        'declaration': 'parens-new-line', // Wrap multiline JSX in parentheses for declarations
        'assignment': 'parens-new-line', // Wrap multiline JSX in parentheses for assignments
        'return': 'parens-new-line', // Wrap multiline JSX in parentheses for returns
        'arrow': 'parens-new-line', // Wrap multiline JSX in parentheses for arrow functions
        'condition': 'parens-new-line', // Wrap multiline JSX in parentheses for conditions
        'logical': 'ignore', // Ignore logical expressions
        'prop': 'ignore' // Ignore props
      }]
      // '@/type-annotation-spacing': 'error',
      // '@/member-delimiter-style': ['error', {
      //   'multiline': {
      //     'delimiter': 'semi',
      //     'requireLast': true
      //   },
      //   'singleline': {
      //     'delimiter': 'semi',
      //     'requireLast': true
      //   },
      //   'multilineDetection': 'brackets'
      // }],
    }
  }
];

export default eslintConfig;
