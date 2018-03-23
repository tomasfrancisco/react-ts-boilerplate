const path = require("path");
const paths = require("../paths");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

// load the default config generator.
const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend it as you need.

  // For example, add typescript loader:
  config.module.rules.push({
    oneOf: [
      {
        test: /\.(ts|tsx)$/,
        include: paths.appSrc,
        use: [
          {
            loader: require.resolve("ts-loader"),
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true
            }
          }
        ]
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");

  config.plugins.push(
    new TsconfigPathsPlugin({ configFile: paths.appTsConfig })
  );

  return config;
};
