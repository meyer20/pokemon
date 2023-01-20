const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@angular-builders/jest/dist/jest-config/setup.js',
    '<rootDir>/setup-jest.ts'
  ],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  transformIgnorePatterns: ['^.+\\.js$'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/pokemon',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
