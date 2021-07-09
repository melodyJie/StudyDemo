'use strict';

module.exports = {
    extends: ['@commitlint/config-angular', '@commitlint/config-lerna-scopes'],
    rules: {
      "header-max-length": [0, "always", 100],
      "type-enum": [
        2,
        'always',
        [
          'build',
          'ci',
          'doc',
          'feat',
          'fix',
          'perf',
          'refactor',
          'chore',
          'style',
          'test'
        ]
      ],
      "scope-enum": [
        2,
        'always',
        [
          "component",
        ]
      ],
    },
};
