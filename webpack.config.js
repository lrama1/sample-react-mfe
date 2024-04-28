const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/bootstrap.js",
  mode: "development",
  devServer: {
    port: 9002,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microfrontend",
      filename: "remoteEntry.js",
      exposes: {
        "./Microfrontend": "./src/indexForRemote",
      },
      shared: {
        react: {
          import: "react", // The "import" property is used to specify the module that should be loaded as a fallback
          shareKey: "react", // The name of the shared module
          shareScope: "default", // The shared scope
          singleton: true, // Only a single version of the shared module should be loaded
        },
        "react-dom": {
          import: "react-dom",
          shareKey: "react-dom",
          shareScope: "default",
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
