module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: '.',
          alias: {
            '@theme': './src/theme',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@assets': './src/assets',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@brand': './src/brand',
            '@types': './src/@types',
            '@test': './src/@test',
            '@data': './src/data',
            '@modules': './src/modules',
            '@domain': './src/domain',
          },
        },
      ],
    ],
  };
};
