const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
	{
		entry: [ './src/index.tsx', './src/app.scss' ],
		output: {
			filename: '[name].[chunkhash].js',
			path: path.resolve(__dirname,
			'wwwroot'),

		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						{ loader: MiniCssExtractPlugin.loader },
						{ loader: 'css-loader' },
						{
							loader: 'sass-loader',
							options: {
								// Prefer Dart Sass
								implementation: require('sass'),

								// See https://github.com/webpack-contrib/sass-loader/issues/804
								webpackImporter: false,
								sassOptions: {
									includePaths: [ './node_modules' ]
								}
							},
						},
					]
				}
			],
		},
		plugins: [
			new
			CleanWebpackPlugin(),
			new
			HtmlWebpackPlugin(
			{
				template: "./src/index.html",
				inject: 'body'
			}
			),
			new
			MiniCssExtractPlugin(
			{
				filename: "[name].[chunkhash].css"
			}
			)
		],
		resolve: {
			extensions: [ '.tsx', '.ts', '.js' ],
		}
	}
];
