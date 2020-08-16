const { task, series, parallel, src, dest, watch } = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

// For minified javascript
var useref = require("gulp-useref");
var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");

// For minified CSS
var cssnano = require("gulp-cssnano");

// For optimized CSS
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");

// Clean up unused files
var del = require("del");

// Sass Task
task("sass", function () {
  return src("src/scss/**/*.scss") // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(dest("src/css"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

// ===== Minify javascript and css files included inside html====
task("useref", function () {
  return (
    src("src/*.html")
      .pipe(useref())
      // Minifies only if it's a JavaScript file
      .pipe(gulpIf("*.js", uglify()))
      .pipe(gulpIf("*.css", cssnano()))
      .pipe(dest("dist"))
  );
});

// ===== Optimize Images =====
task("images", function () {
  return src("src/images/**/*.+(png|jpg|gif|svg)")
    .pipe(
      cache(
        imagemin({
          interlaced: true,
        })
      )
    )
    .pipe(dest("dist/images"));
});

// If you want to delete cache
// task('cache:clear', function (callback) {
//   return cache.clearAll(callback)
// })

// ==== Sending Fonts to dist folder ====
task("fonts", function () {
  return src("src/fonts/**/*").pipe(dest("dist/fonts"));
});

// ====  Clean up Unwanted files ====
task("clean", function (done) {
  del.sync("dist");
  done();
});

// ========= Build everything ============
task(
  "build",
  // series("clean", parallel("sass", "useref", "images", "fonts")),
  function (done) {
    series("clean", parallel("sass", "useref", "images", "fonts"))(done);
  }
);

// --------- FOR DEVELOPMENT ---------- //

// Watchers
task("watch", function () {
  watch("src/scss/**/*.scss", series("sass"));
  // Other watchers
});

// Browser Sync
task("browserSync", function (done) {
  // Watching HTML
  browserSync.init({
    server: {
      baseDir: "src",
    },
  });
  done();
});

task("default", function (done) {
  series(["sass", "browserSync", "watch"])(done);
});
