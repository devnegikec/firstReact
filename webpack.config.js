module.exports = {
devtool: 'source-map',
entry: './main.js',
output:{
    path:'./',
    filename: 'index.js',
},
devServer: {
    inline: true,
    port: 3333,
    stats: {
        chunks:false
    }
},
module: {
loaders:[
{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel',
    query:{
        presets: ['es2015','react']
    }
    }
]
},
	
}
