module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'block-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'dot-location': ['error', 'property'],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': 2,
    'keyword-spacing': 2,
    'lines-between-class-members': ['error', 'always'],
    'no-alert': 2,
    'no-const-assign': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-else-if': 2,
    'no-dupe-keys': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-irregular-whitespace': 2,
    'no-mixed-operators': 2,
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1
      }
    ],
    'no-trailing-spaces': 2,
    'no-unreachable': 2,
    'no-unused-vars': 2,
    'no-var': 2,
    'object-property-newline': 2,
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      {
        blankLine: 'always',
        prev: ['import'],
        next: ['const', 'let', 'var', 'export']
      }
    ],
    'prefer-const': 2,
    'prefer-object-spread': 2,
    'vue/attribute-hyphenation': 2,
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true
      }
    ],

    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
        maxEmptyLines: 0
      }
    ],
    'vue/camelcase': 2,
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    'vue/custom-event-name-casing': [
      'error',
      'kebab-case',
      {
        ignores: []
      }
    ],
    'vue/dot-location': ['error', 'property'],
    'vue/eqeqeq': ['error', 'always'],
    'vue/html-closing-bracket-spacing': 2,
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: []
      }
    ],
    'vue/html-end-tags': 2,
    'vue/html-indent': 2,
    'vue/html-quotes': 2,
    'vue/key-spacing': 2,
    'vue/keyword-spacing': 2,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/multi-word-component-names': ['error'],
    'vue/multiline-html-element-content-newline': 2,
    'vue/mustache-interpolation-spacing': 2,
    'vue/no-async-in-computed-properties': 2,
    'vue/no-dupe-keys': [
      'error',
      {
        groups: []
      }
    ],
    'vue/no-dupe-v-else-if': 2,
    'vue/no-duplicate-attributes': 2,
    'vue/no-empty-pattern': 2,
    'vue/no-irregular-whitespace': 2,
    'vue/no-multi-spaces': 2,
    'vue/no-mutating-props': 2,
    'vue/no-parsing-error': 2,
    'vue/no-reserved-component-names': 2,
    'vue/no-reserved-keys': [
      'error',
      {
        reserved: [],
        groups: []
      }
    ],
    'vue/no-shared-component-data': 2,
    'vue/no-side-effects-in-computed-properties': 2,
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/no-static-inline-styles': 2,
    'vue/no-template-key': 2,
    'vue/no-template-shadow': 2,
    'vue/no-unused-components': 2,
    'vue/no-unused-vars': 2,
    'vue/no-use-v-if-with-v-for': 2,
    'vue/no-useless-template-attributes': 2,
    'vue/no-v-html': 'off',
    'vue/order-in-components': 2,
    'vue/padding-line-between-blocks': 2,
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-component-is': 2,
    'vue/require-default-prop': 2,
    'vue/require-direct-export': 2,
    'vue/require-name-property': 2,
    'vue/require-prop-type-constructor': 2,
    'vue/require-prop-types': 2,
    'vue/require-render-return': 2,
    'vue/require-valid-default-prop': 2,
    'vue/return-in-computed-property': 2,
    'vue/static-class-names-order': 2,
    'vue/singleline-html-element-content-newline': 2,
    'vue/this-in-template': ['error', 'never'],
    'vue/v-on-function-call': 2,
    'vue/valid-template-root': 2,
    'vue/valid-v-bind-sync': 2,
    'vue/valid-v-bind': 2,
    'vue/valid-v-cloak': 2,
    'vue/valid-v-else-if': 2,
    'vue/valid-v-else': 2,
    'vue/valid-v-for': 2,
    'vue/valid-v-if': 2,
    'vue/valid-v-model': 2,
    'vue/valid-v-on': 2,
    'vue/valid-v-once': 2,
    'vue/valid-v-pre': 2,
    'vue/valid-v-show': 2,
    'vue/valid-v-text': 2,
    camelcase: 2,
    eqeqeq: ['error', 'always'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
