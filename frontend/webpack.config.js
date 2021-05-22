const path = require('path');

module.exports = {
    watch: true,
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/preset-react",{
                'plugins': ['@babel/plugin-proposal-class-properties']}] }
            },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
        ]
        },
    entry: './src/index.js',  // path to our input file
    output: {
        filename: 'map-bundle.js',  // output bundle file name
        path: path.resolve(__dirname, '../static'),  // path to our Django static directory
    },
};
