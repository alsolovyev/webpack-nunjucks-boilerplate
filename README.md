# 📦 Webpack + Nunjucks Boilerplate
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Webpack + Nunjucks boilerplate for static websites that has all the necessary modern tools and optimizations built-in.

![Webpack Boilerplate](https://habrastorage.org/webt/iy/mr/2a/iymr2asueudrawkzepthfai6qvy.jpeg)

<br/>



## ⚗️ Features
- [Webpack](https://webpack.js.org)
- [Nunjucks](https://mozilla.github.io/nunjucks) (supports multiple pages)
- [Babel](https://babeljs.io)
- [TypeScript](https://typescriptlang.org) (disabled by default)
- [ESLint](https://eslint.org)
- [Sass](https://sass-lang.com)
- [PostCSS](https://postcss.org)
- [StyleLint](https://stylelint.io)
- [SVG Sprite](https://github.com/JetBrains/svg-sprite-loader)


<br/>



## 🚀 Usage
```bash
# Clone repository
git clone https://github.com/alsolovyev/webpack-boilerplate.git project-name

# Navigate to the project directory
cd project-name

# Install dependencies
yarn          # npm install

# Run webpack-dev-server and let the magic happen
yarn start    # npm start

# Build the project from sources
yarn build    # npm run-script build

# Deploy the dist folder to GitHub pages
yarn deploy
```

<br/>



## 💻 Available Scripts

- `serve` - run the `webpack-dev-server`
- `build` - build the project
- `deploy` - deploy the `dist` folder to GitHub Pages

<br/>



## 📘 Documentation

### TypeScript Support

By default, TypeScript support is disabled. To enable it, set the `TS_SUPPORT` environment variable to `true` in `package.json`.
```bash
... TS_SUPPORT=true ...
```

### Multiple pages

Just create nunjucks files in `src` folder
```
┣━ js
┣━ njk
┣━ sass
┣━ home.njk
┣━ page1.njk
┣━ page2.njk
```

### SVG sprite

1. Import SVG icon
```javascript
// src/js/dev/icons.js
import '@/icons/github.svg'
```
2. Use this icon in your template
```javascript
// *.njk
{{ icon('github') | safe }}
```

### Environment variables

#### `NODE_ENV`

> Type: `'development' | 'production' | none` <br/>
> Default: `'development'`

Indicates the current mode.

#### `OUTPUT_DIR`

> Type: `string` <br/>
> Default: `'dist'`

Indicates the directory where the production build files will be generated.

#### `PUBLIC_PATH`

> Type: `string` <br/>
> Default: `'/'`

Indicates the base URL your project bundle will be deployed at.

#### `SOURCE_DIR`

> Type: `string` <br/>
> Default: `'src'`

Indicates the directory where the source files are located.

#### `TS_SUPPORT`

> Type: `'true' | 'false' | none` <br/>
> Default: `none`

Indicates whether TypeScript support should be enabled. <br/>
*`none` is equal to `false`*

<br/>



## 🔨 Task List
- [x] ~~Have a cup of tea~~
- [x] ~~Clear the terminal screen~~ ([c73fd0](https://github.com/alsolovyev/webpack-boilerplate/commit/c73fd0d4cbf53da72866ac9a326f27f9d62fbf79))
- [x] ~~Enable ESLint for TypeScript files~~ ([c27e7b](https://github.com/alsolovyev/webpack-nunjucks-boilerplate/commit/c27e7be368fedff85817efc422e5ffe7233eda39))
- [x] ~~Run loaders in a worker pools~~ ([534c0b](https://github.com/alsolovyev/webpack-nunjucks-boilerplate/commit/534c0bd62b5727504e6036999a23609c4e03a186))
- [x] ~~Run TypeScript type checker on a separate process~~ ([534c0b](https://github.com/alsolovyev/webpack-nunjucks-boilerplate/commit/534c0bd62b5727504e6036999a23609c4e03a186))
- [x] ~~Disable TypeScript support by default~~ ([e7c659](https://github.com/alsolovyev/webpack-nunjucks-boilerplate/pull/11/commits/e7c65978384f4becb5836d5d99892d5f377fc9b2))
- [ ] Add native OS notifications


<br/>



## 📓 Dependencies

### Webpack:
- [webpack](https://github.com/webpack/webpack)
- [webpack-cli](https://github.com/webpack/webpack-cli)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

### Loaders:
- Nunjucks
  - [html-loader](https://github.com/webpack-contrib/html-loader)
  - [njk-loader(internal)](./config/modules/njk-loader/index.js)
    - [nunjucks](https://github.com/mozilla/nunjucks)

- JavaScript
  - [babel-loader](https://github.com/babel/babel-loader)
    - [@babel/core](https://github.com/babel/babel)
    - [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)

- TypeScript
  - [babel-loader](https://github.com/babel/babel-loader)
    - [@babel/core](https://github.com/babel/babel)
    - [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
  - [ts-loader](https://github.com/TypeStrong/ts-loader)
    - [typescript](https://github.com/microsoft/TypeScript)

- CSS
  - [style-loader](https://github.com/webpack-contrib/style-loader)
  - [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
  - [css-loader](https://github.com/webpack-contrib/css-loader)
  - [postcss-loader](https://github.com/webpack-contrib/postcss-loader)
    - [postcss](https://github.com/postcss/postcss)
    - [autoprefixer](https://github.com/postcss/autoprefixer)
  - [sass-loader](https://github.com/webpack-contrib/sass-loader)
    - [sass](https://github.com/sass/sass)

- Assets
  - [asset modules](https://webpack.js.org/guides/asset-modules)

- SVG
  - [svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)
  - [svgo-loader](https://github.com/svg/svgo-loader)

- Optimization
  - [thread-loader](https://github.com/webpack-contrib/thread-loader)

### Plugins:

- HTML
  - [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)

- TypeScript
  - [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)

- CSS
  - [MiniCssExtractPlugin](https://github.com/webpack-contrib/mini-css-extract-plugin)

- Eslint
  - [eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin)
    - [ESLint](https://github.com/eslint/eslint)
    - [@babel/core](https://github.com/babel/babel)
    - [@babel/eslint-parser](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser)
    - [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)
    - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

- Stylelint
  - [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin)
    - [StyleLint](https://github.com/stylelint/stylelint)

- Terminal
  - [TerminalClearPlugin(internal)](./config/modules/terminal-clear-plugin/index.js)

<br/>



## 💩 Authors
* **[Aleksey Solovyev](https://github.com/alsolovyev)** - [solovyev.a@icloud.com](mailto:solovyev.a@icloud.com)

<br/>



## 📖 License
This project is licensed under the [MIT](./LICENSE) License
