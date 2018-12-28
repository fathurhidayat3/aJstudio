var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var concat = require("gulp-concat");

gulp.task("sass-base", function() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass())
    .pipe(concat("aj-studio.css"))
    .pipe(gulp.dest("public/dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("sass-dep", function() {
  return gulp
    .src([
      "node_modules/font-awesome/scss/font-awesome.scss",
      "node_modules/bootstrap/scss/bootstrap.scss"
    ])
    .pipe(sass())
    .pipe(gulp.dest("public/dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("js", function() {
  return gulp
    .src([
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/jquery/dist/jquery.min.js",
      "src/js/*.js"
      // "node_modules/tether/dist/js/tether.min.js"
    ])
    .pipe(gulp.dest("public/dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("serve", function() {
  browserSync.init({
    server: {
      baseDir: "./public"
    },
    port: 3000
  });

  gulp.watch(
    ["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"],
    gulp.series("sass-base", "sass-dep")
  );

  gulp.watch(
    ["src/js/*.js"],
    gulp.series("js")
  );

  gulp.watch("./public/*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.series("sass-base", "sass-dep", "js", "serve"));
