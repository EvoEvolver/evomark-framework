var argv = require('minimist')(process.argv.slice(2));

var settings = {
    src: "./docs/",
}

Object.assign(settings, argv)

var child_process = require('child_process');

var evomark_complier = child_process.spawn('node', ['./packages/evomark-loader/index.js',"--src",settings.src], { encoding: 'utf-8' });

evomark_complier.stdout.on('data', function (chunk) {
    console.log("[EvoMark] "+chunk.toString());
});
evomark_complier.stderr.on('data', (data) => {
    console.log("[EvoMark] "+data);
});

var nuxt_dev_server = child_process.spawn("yarn",["dev"], { encoding: 'utf-8' ,cwd: 'packages/evomarked-nuxt'});

nuxt_dev_server.stdout.on('data', function (chunk) {
    console.log("[Nuxt] "+chunk.toString());
});
nuxt_dev_server.stderr.on('data', (data) => {
    console.log("[Nuxt] "+data);
});