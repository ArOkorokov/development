const config = {
    mode: "development",
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
      },
    entry: {
        index: './src/js/index.js',
    },
    output: {
        filename: '[name].bundle.js',
    },
};

module.exports = config;