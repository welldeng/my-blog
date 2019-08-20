module.exports = {
    mode: 'development',
    context: '/Users/mr-onions/projects/webpack-project/vue-project',
    devtool: 'cheap-module-eval-source-map',
    node: {
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    output: {
        path: '/Users/mr-onions/projects/webpack-project/vue-project/dist',
        filename: '[name].js',
        publicPath: '/',
        globalObject: '(typeof self !== \'undefined\' ? self : this)'
    },
    resolve: {
        alias: {
            '@': '/Users/mr-onions/projects/webpack-project/vue-project/src',
            vue$: 'vue/dist/vue.runtime.esm.js'
        },
        extensions: [
            '.mjs',
            '.js',
            '.jsx',
            '.vue',
            '.json',
            '.wasm'
        ],
        modules: [
            'node_modules',
            '/Users/mr-onions/projects/webpack-project/vue-project/node_modules',
            '/Users/mr-onions/projects/webpack-project/vue-project/node_modules/@vue/cli-service/node_modules'
        ]
    },
    resolveLoader: {
        modules: [
            '/Users/mr-onions/projects/webpack-project/vue-project/node_modules/@vue/cli-plugin-eslint/node_modules',
            '/Users/mr-onions/projects/webpack-project/vue-project/node_modules/@vue/cli-plugin-babel/node_modules',
            'node_modules',
            '/Users/mr-onions/projects/webpack-project/vue-project/node_modules',
            '/Users/mr-onions/projects/webpack-project/vue-project/node_modules/@vue/cli-service/node_modules'
        ]
    },
    module: {
        noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
        rules: [
            /* config.module.rule('vue') */
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'cache-loader',
                        options: {
                            cacheDirectory: '/Users/mr-onions/projects/webpack-project/vue-project/node_modules/.cache/vue-loader',
                            cacheIdentifier: '3547762a'
                        }
                    },
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            },
                            cacheDirectory: '/Users/mr-onions/projects/webpack-project/vue-project/node_modules/.cache/vue-loader',
                            cacheIdentifier: '3547762a'
                        }
                    }
                ]
            },
            /* config.module.rule('images') */
            {
                test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            /* config.module.rule('svg') */
            {
                test: /\.(svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            /* config.module.rule('media') */
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            /* config.module.rule('fonts') */
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            /* config.module.rule('pug') */
            {
                test: /\.pug$/,
                oneOf: [
                    /* config.module.rule('pug').oneOf('pug-vue') */
                    {
                        resourceQuery: /vue/,
                        use: [
                            {
                                loader: 'pug-plain-loader'
                            }
                        ]
                    },
                    /* config.module.rule('pug').oneOf('pug-template') */
                    {
                        use: [
                            {
                                loader: 'raw-loader'
                            },
                            {
                                loader: 'pug-plain-loader'
                            }
                        ]
                    }
                ]
            },
            /* config.module.rule('css') */
            {
                test: /\.css$/,
                oneOf: [
                    /* config.module.rule('css').oneOf('vue-modules') */
                    {
                        resourceQuery: /module/,
                        use: [
                            {
                                loader: 'vue-style-loader',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2,
                                    modules: true,
                                    localIdentName: '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    },
                    /* config.module.rule('css').oneOf('vue') */
                    {
                        resourceQuery: /\?vue/,
                        use: [
                            {
                                loader: 'vue-style-loader',
                                options: {
                                    sourceMap: false,
                                    shadowMode: false
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    importLoaders: 2
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            }
                        ]
                    },
                    /* config.module.rule('css').oneOf('normal-modules') */
                    {
                        test: /\.module\.\w+$/,
                        use: [
                            {
                                loader: '
                                vue-style - loader',
                                options
:
{
    sourceMap: false,
        shadowMode
:
    false
}
},
{
    loader: 'css-loader',
        options
:
    {
        sourceMap: false,
            importLoaders
    :
        2,
            modules
    :
        true,
            localIdentName
    :
        '[name]_[local]_[hash:base64:5]'
    }
}
,
{
    loader: 'postcss-loader',
        options
:
    {
        sourceMap: false
    }
}
]
},
/* config.module.rule('css').oneOf('normal') */
{
    use: [
        {
            loader: 'vue-style-loader',
            options: {
                sourceMap: false,
                shadowMode: false
            }
        },
        {
            loader: 'css-loader',
            options: {
                sourceMap: false,
                importLoaders: 2
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: false
            }
        }
    ]
}
]
},
/* config.module.rule('postcss') */
{
    test: /\.p(ost)?css$/,
        oneOf
:
    [
        /* config.module.rule('postcss').oneOf('vue-modules') */
        {
            resourceQuery: /module/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                }
            ]
        },
        /* config.module.rule('postcss').oneOf('vue') */
        {
            resourceQuery: /\?vue/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                }
            ]
        },
        /* config.module.rule('postcss').oneOf('normal-modules') */
        {
            test: /\.module\.\w+$/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                }
            ]
        },
        /* config.module.rule('postcss').oneOf('normal') */
        {
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                }
            ]
        }
    ]
}
,
/* config.module.rule('scss') */
{
    test: /\.scss$/,
        oneOf
:
    [
        /* config.module.rule('scss').oneOf('vue-modules') */
        {
            resourceQuery: /module/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false
                    }
                }
            ]
        },
        /* config.module.rule('scss').oneOf('vue') */
        {
            resourceQuery: /\?vue/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false
                    }
                }
            ]
        },
        /* config.module.rule('scss').oneOf('normal-modules') */
        {
            test: /\.module\.\w+$/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false
                    }
                }
            ]
        },
        /* config.module.rule('scss').oneOf('normal') */
        {
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false
                    }
                }
            ]
        }
    ]
}
,
/* config.module.rule('sass') */
{
    test: /\.sass$/,
        oneOf
:
    [
        /* config.module.rule('sass').oneOf('vue-modules') */
        {
            resourceQuery: /module/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false,
                        indentedSyntax: true
                    }
                }
            ]
        },
        /* config.module.rule('sass').oneOf('vue') */
        {
            resourceQuery: /\?vue/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false,
                        indentedSyntax: true
                    }
                }
            ]
        },
        /* config.module.rule('sass').oneOf('normal-modules') */
        {
            test: /\.module\.\w+$/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false,
                        indentedSyntax: true
                    }
                }
            ]
        },
        /* config.module.rule('sass').oneOf('normal') */
        {
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false,
                        indentedSyntax: true
                    }
                }
            ]
        }
    ]
}
,
/* config.module.rule('less') */
{
    test: /\.less$/,
        oneOf
:
    [
        /* config.module.rule('less').oneOf('vue-modules') */
        {
            resourceQuery: /module/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: false
                    }
                }
            ]
        },
        /* config.module.rule('less').oneOf('vue') */
        {
            resourceQuery: /\?vue/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: false
                    }
                }
            ]
        },
        /* config.module.rule('less').oneOf('normal-modules') */
        {
            test: /\.module\.\w+$/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: false
                    }
                }
            ]
        },
        /* config.module.rule('less').oneOf('normal') */
        {
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: false
                    }
                }
            ]
        }
    ]
}
,
/* config.module.rule('stylus') */
{
    test: /\.styl(us)?$/,
        oneOf
:
    [
        /* config.module.rule('stylus').oneOf('vue-modules') */
        {
            resourceQuery: /module/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'stylus-loader',
                    options: {
                        sourceMap: false,
                        preferPathResolver: 'webpack'
                    }
                }
            ]
        },
        /* config.module.rule('stylus').oneOf('vue') */
        {
            resourceQuery: /\?vue/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'stylus-loader',
                    options: {
                        sourceMap: false,
                        preferPathResolver: 'webpack'
                    }
                }
            ]
        },
        /* config.module.rule('stylus').oneOf('normal-modules') */
        {
            test: /\.module\.\w+$/,
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'stylus-loader',
                    options: {
                        sourceMap: false,
                        preferPathResolver: 'webpack'
                    }
                }
            ]
        },
        /* config.module.rule('stylus').oneOf('normal') */
        {
            use: [
                {
                    loader: 'vue-style-loader',
                    options: {
                        sourceMap: false,
                        shadowMode: false
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                },
                {
                    loader: 'stylus-loader',
                    options: {
                        sourceMap: false,
                        preferPathResolver: 'webpack'
                    }
                }
            ]
        }
    ]
}
,
/* config.module.rule('js') */
{
    test: /\.m?jsx?$/,
        exclude
:
    [
        filepath => {
            // always transpile js in vue files
            if (/\.vue\.jsx?$/.test(filepath)) {
                return false
            }
            // exclude dynamic entries from cli-service
            if (filepath.startsWith(cliServicePath)) {
                return true
            }
            // check if this is something the user explicitly wants to transpile
            if (transpileDepRegex && transpileDepRegex.test(filepath)) {
                return false
            }
            // Don't transpile node_modules
            return /node_modules/.test(filepath)
        }
    ],
        use
:
    [
        {
            loader: 'cache-loader',
            options: {
                cacheDirectory: '/Users/mr-onions/projects/webpack-project/vue-project/node_modules/.cache/babel-loader',
                cacheIdentifier: '87229eae'
            }
        },
        {
            loader: 'babel-loader'
        }
    ]
}
,
/* config.module.rule('eslint') */
{
    enforce: 'pre',
        test
:
    /\.(vue|(j|t)sx?)$/,
        exclude
:
    [
        /node_modules/,
        '/Users/mr-onions/projects/webpack-project/vue-project/node_modules/@vue/cli-service/lib'
    ],
        use
:
    [
        {
            loader: 'eslint-loader',
            options: {
                extensions: [
                    '.js',
                    '.jsx',
                    '.vue'
                ],
                cache: true,
                cacheIdentifier: '4d92548d',
                emitWarning: true,
                emitError: false,
                eslintPath: '/Users/mr-onions/projects/webpack-project/vue-project/node_modules/eslint',
                formatter: function (results) {
                    let errors = 0;
                    let warnings = 0;
                    let fixableErrors = 0;
                    let fixableWarnings = 0;

                    const resultsWithMessages = results.filter(result => result.messages.length > 0);

                    let output = resultsWithMessages.reduce((resultsOutput, result) => {
                        const messages = result.messages.map(message => `${formatMessage(message, result)}\n\n`);

                        errors += result.errorCount;
                        warnings += result.warningCount;
                        fixableErrors += result.fixableErrorCount;
                        fixableWarnings += result.fixableWarningCount;

                        return resultsOutput.concat(messages);
                    }, []).join("\n");

                    output += "\n";
                    output += formatSummary(errors, warnings, fixableErrors, fixableWarnings);

                    return (errors + warnings) > 0 ? output : "";
                }
            }
        }
    ]
}
]
},
plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
        {
            'process.env': {
                VUE_APP_CLI_UI_URL: '""',
                NODE_ENV: '"development"',
                BASE_URL: '"/"'
            }
        }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
        {
            additionalTransformers: [
                error => {
                    if (error.webpackError) {
                        const message = typeof error.webpackError === 'string'
                            ? error.webpackError
                            : error.webpackError.message || ''
                        for (const {re, msg, type} of rules) {
                            const match = message.match(re)
                            if (match) {
                                return Object.assign({}, error, {
                                    // type is necessary to avoid being printed as defualt error
                                    // by friendly-error-webpack-plugin
                                    type,
                                    shortMessage: msg(error, match)
                                })
                            }
                        }
                        // no match, unknown webpack error without a message.
                        // friendly-error-webpack-plugin fails to handle this.
                        if (!error.message) {
                            return Object.assign({}, error, {
                                type: 'unknown-webpack-error',
                                shortMessage: message
                            })
                        }
                    }
                    return error
                }
            ],
            additionalFormatters: [
                errors => {
                    errors = errors.filter(e => e.shortMessage)
                    if (errors.length) {
                        return errors.map(e => e.shortMessage)
                    }
                }
            ]
        }
    ),
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('progress') */
    new ProgressPlugin(),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
        {
            templateParameters: (compilation, assets, pluginOptions) => {
                // enhance html-webpack-plugin's built in template params
                let stats
                return Object.assign({
                    // make stats lazy as it is expensive
                    get webpack() {
                        return stats || (stats = compilation.getStats().toJson())
                    },
                    compilation: compilation,
                    webpackConfig: compilation.options,
                    htmlWebpackPlugin: {
                        files: assets,
                        options: pluginOptions
                    }
                }, resolveClientEnv(options, true /* raw */))
            },
            template: '/Users/mr-onions/projects/webpack-project/vue-project/public/index.html'
        }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
        {
            rel: 'preload',
            include: 'initial',
            fileBlacklist: [
                /\.map$/,
                /hot-update\.js$/
            ]
        }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
        {
            rel: 'prefetch',
            include: 'asyncChunks'
        }
    ),
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
        [
            {
                from: '/Users/mr-onions/projects/webpack-project/vue-project/public',
                to: '/Users/mr-onions/projects/webpack-project/vue-project/dist',
                toType: 'dir',
                ignore: [
                    '.DS_Store'
                ]
            }
        ]
    )
],
    entry
:
{
    app: [
        './src/main.js'
    ]
}
}