module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-relative-path-import',
      {
        'paths': [
          {
            rootPathPrefix: '@Strings',
            rootPathSuffix: 'assets/Strings'
          },
          {
            rootPathPrefix: '@Images',
            rootPathSuffix: 'assets/Strings'
          },
        ]
      }
    ]
  ]
};
