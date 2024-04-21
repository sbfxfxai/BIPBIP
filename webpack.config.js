const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output filename
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Apply this rule to .js files
                exclude: /node_modules/, // Don't apply to files in node_modules
                use: {
                    loader: 'babel-loader', // Use babel-loader for transpilation
                    options: {
                        presets: ['@babel/preset-env'], // Use @babel/preset-env for configuring babel
                    },
                },
            },
        ],
    },
};
