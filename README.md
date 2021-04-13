# 📦 Webpack + Nunjucks Boilerplate
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Webpack + Nunjucks boilerplate for static websites that has all the necessary modern tools and optimizations built-in.

![Webpack Boilerplate](https://habrastorage.org/webt/iy/mr/2a/iymr2asueudrawkzepthfai6qvy.jpeg)

<br/>



## ⚗️ Features
- [Webpack](https://webpack.js.org)
- [Nunjucks (supports multiple pages)](https://mozilla.github.io/nunjucks)
- [Babel](https://babeljs.io)
- [TypeScript](https://www.typescriptlang.org)
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



## 📘 Helpers

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

<br/>



## 🔨 Task List
- [x] ~~Have a cup of tea~~


<br/>



## 📓 Dependencies

### Webpack:
- [webpack](https://github.com/webpack/webpack)
- [webpack-cli](https://github.com/webpack/webpack-cli)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

### Loaders:
- Nunjucks
  - [simple-nunjucks-loader](https://github.com/ogonkov/nunjucks-loader)
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

### Plugins:

- HTML
  - [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)

- CSS
  - [MiniCssExtractPlugin](https://github.com/webpack-contrib/mini-css-extract-plugin)

- Eslint
  - [eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin)
    - [ESLint](https://github.com/eslint/eslint)

- Stylelint
  - [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin)
    - [StyleLint](https://github.com/stylelint/stylelint)

<br/>



## 💩 Authors
* **[Aleksey Solovyev](https://github.com/alsolovyev)** - [solovyev.a@icloud.com](mailto:solovyev.a@icloud.com)

<br/>



## 📖 License
This project is licensed under the [MIT](./LICENSE) License
