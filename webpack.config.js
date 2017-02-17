module.exports = {
    entry: "./server.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: []
    }
};
