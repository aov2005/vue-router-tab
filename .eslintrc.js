const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      // 支持装饰器
      legacyDecorators: true
    }
  },
  rules: {
    'no-console': 'off',
    'no-debugger': isProd ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-prototype-builtins': 'off',
    'vue/no-v-html': 'off',
    'vue/no-unused-vars': 'off',
    'vue/require-default-prop': 'off'
  }
}
