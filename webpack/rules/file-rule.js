module.exports = {
    test: /\.(png|jpe?g|gif|woff|woff2|ttf|svg|ico)$/i,
    use: [
        {
            loader: 'file-loader',
        },
    ],
}
