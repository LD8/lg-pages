# lg-pages-boilerplate

[![Package Version][version-image]][version-url]
[![License][license-image]][license-url]

**LAGOU EDU, PART 2, MODULE 1, ASSIGNMENT**

本项目使用前端工程化构建工具 `gulp` 以及相关构建插件完成。它可以方便地创建一个静态网站。操作如下：

## 克隆到本地并安装依赖

```shell
# clone repo
$ git clone https://github.com/LD8/lg-pages.git my-pages

$ cd my-pages

# install dependencies
$ yarn # or npm install
```

## 使用构建命令

```shell
# Cleans `temp` and `dist` folders
$ yarn dev

# Runs the app in development mode
$ yarn dev

# Builds the app for production to the `dist` folder
$ yarn build
```

## 文件夹结构

```
└── my-awesome-pages ································· project root
   ├─ public ········································· static folder
   │  └─ favicon.ico ································· static file (unprocessed)
   ├─ src ············································ source folder
   │  ├─ assets ······································ assets folder
   │  │  ├─ fonts ···································· fonts folder
   │  │  │  └─ pages.ttf ····························· font file (imagemin)
   │  │  ├─ images ··································· images folder
   │  │  │  └─ logo.png ······························ image file (imagemin)
   │  │  ├─ scripts ·································· scripts folder
   │  │  │  └─ main.js ······························· script file (babel / uglify)
   │  │  └─ styles ··································· styles folder
   │  │     ├─ _variables.scss ······················· partial sass file (dont output)
   │  │     └─ main.scss ····························· entry scss file (scss / postcss)
   │  ├─ layouts ····································· layouts folder
   │  │  └─ basic.html ······························· layout file (dont output)
   │  ├─ partials ···································· partials folder
   │  │  └─ header.html ······························ partial file (dont output)
   │  ├─ about.html ·································· page file (use layout & partials)
   │  └─ index.html ·································· page file (use layout & partials)
   ├─ .csscomb.json ·································· csscomb config file
   ├─ .editorconfig ·································· editor config file
   ├─ .gitignore ····································· git ignore file
   ├─ .travis.yml ···································· travis ci config file
   ├─ CHANGELOG.md ··································· repo changelog
   ├─ LICENSE ········································ repo license
   ├─ README.md ······································ repo readme
   ├─ gulpfile.js ···································· gulp tasks file
   ├─ package.json ··································· package file
   └─ yarn.lock ······································ yarn lock file
```

## 贡献

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!


[travis-image]: https://img.shields.io/travis/zce/pages-boilerplate/master.svg
[travis-url]: https://travis-ci.org/zce/pages-boilerplate
[version-image]: https://img.shields.io/github/package-json/v/zce/pages-boilerplate/master.svg
[version-url]: https://github.com/zce/pages-boilerplate
[license-image]: https://img.shields.io/github/license/zce/pages-boilerplate.svg
[license-url]: https://github.com/zce/pages-boilerplate/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/pages-boilerplate.svg
[dependency-url]: https://david-dm.org/zce/pages-boilerplate
[devdependency-image]: https://img.shields.io/david/dev/zce/pages-boilerplate.svg
[devdependency-url]: https://david-dm.org/zce/pages-boilerplate?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
