module.exports = function(api) {
  const presets = ['babel-preset-expo'];
  const plugins = [[
      "module-resolver",
      {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.js",
          ".android.tsx",
          ".ios.js",
          ".ios.tsx"
        ],
        root: ["./src"],
        alias: {
          "@Components": "./src/components",
          "@Utils": "./src/utils",
          "@Hooks": "./src/hooks",
          "@Types": "./src/types",
          "@Constants": "./src/constants"
        }
      }
    ]];

  if (api.env() === 'development') {
    // dev things here
  } else {
    plugins.push('transform-remove-console');
  }

  api.cache(true);

  return { presets, plugins };
};
