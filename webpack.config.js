
const path=require('path');
const ExtractProduction=require('extract-text-webpack-plugin');
const CSSExtract= new ExtractProduction('styles.css');
module.exports=(env)=>{
    const isProduction = env==='Production';
    console.log('env',env);
    return{
        entry:"./src/app.js",
        output:{
            path:path.join(__dirname,'public'),
            filename:'bundle.js'
        },
        module:{
            rules : [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use:CSSExtract.extract({
                    use :[
                        {
                            loader:'css-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        {
                            loader:'sass-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                    ]
                }),
                
                test : /\.s?css$/
                
                
                
            }
        ]
        },
        plugins:[
            CSSExtract
        ],
        devtool :isProduction?'source-map':'inline-source-map',
        devServer : {
            contentBase : path.join(__dirname,'public')
        }
    };
};
