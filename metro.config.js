const { getDefaultConfig } = require("metro-config");
 
module.exports = (async () => {
  const {
    resolver: { sourceExts } 
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve("react-native-stylus-transformer")
    },
    resolver: {
      sourceExts: [...sourceExts, "styl"]
    }
  };
})();
