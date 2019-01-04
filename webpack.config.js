const path = require("path");

module.exports = {
    entry: path.join(__dirname, "/src/index.jsx"),
    output: {
        path: path.join(__dirname, "/app/bin"),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};