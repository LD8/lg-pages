const { src, dest, series, parallel, watch } = require("gulp");
const loadPlugins = require("gulp-load-plugins");
const browserSync = require("browser-sync");
const del = require("del");
const babel = require("gulp-babel");

const pl = loadPlugins();
const bs = browserSync.create();

const templateData = {
  menus: require("./templateData.json"),
  pkg: require("./package.json"),
  date: new Date(),
};

const convertScss = () => {
  return src("src/assets/styles/*.scss", { base: "src" })
    .pipe(pl.sass({ outputStyle: "expanded" }))
    .pipe(dest("temp"));
};

const convertJs = () => {
  return src("src/assets/scripts/*.js", { base: "src" })
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(dest("temp"));
};

const convertHtml = () => {
  return src("src/*.html", { base: "src" })
    .pipe(pl.swig({ data: templateData, defaults: { cache: false } }))
    .pipe(dest("temp"));
};

const serve = () => {
  watch("src/assets/styles/*.scss", convertScss);
  watch("src/assets/scripts/*.js", convertJs);
  watch("src/*.html", convertHtml);

  bs.init({
    server: {
      notify: false,
      baseDir: ["temp", "src", "public"],
      routes: {
        "/node_modules": "node_modules",
      },
    },
  });
};

const minTemp = () => {
  return src("temp/*.html", { base: "temp" })
    .pipe(pl.useref({ searchPath: ["temp", "."] }))
    .pipe(pl.if(/\.js$/, pl.uglify()))
    .pipe(pl.if(/\.css$/, pl.cleanCss()))
    .pipe(
      pl.if(
        /\.html$/,
        pl.htmlmin({
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        })
      )
    )
    .pipe(dest("dist"));
};

const minImages = () => {
  return (
    src("src/assets/images/**", { base: "src" })
      // .pipe(pl.imagemin())
      .pipe(dest("dist"))
  );
};

const minFonts = () => {
  return (
    src("src/assets/fonts/**", { base: "src" })
      // .pipe(pl.imagemin())
      .pipe(dest("dist"))
  );
};

const copyPublic = () => {
  return src("src/public/**", { base: "src" }).pipe(dest("dist"));
};

const clean = () => {
  return del(["dist", "temp"]);
};

const compile = parallel(convertScss, convertJs, convertHtml);

const dev = series(clean, compile, serve);
const build = series(
  clean,
  parallel(series(compile, minTemp), minImages, minFonts, copyPublic)
);

module.exports = {
  clean,
  dev,
  build,
  convertJs,
};
