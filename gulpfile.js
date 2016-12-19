var fs = require("fs")
var browserify = require("browserify")
var vueify = require("vueify")

browserify("./assets/vue/app.js")
    .transform(vueify)
    .bundle()
    .pipe(fs.createWriteStream("./assets/js/compiled.js"))
