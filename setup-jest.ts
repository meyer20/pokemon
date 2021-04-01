import 'jest-preset-angular';

Object.defineProperty(window.URL, 'createObjectURL', {
  value: () => {
    return {};
  },
});

Object.defineProperty(window.URL, 'revokeObjectURL', {
  value: () => {
    return {};
  },
});
