#!/usr/bin/env node
const path = require("path")

var argv = require('minimist')(process.argv.slice(2));

var settings = {
    src:"",
    mode: ""
}

if (argv["_"][0]) {
    settings.src = argv["_"][0]
}

Object.assign(settings, argv)

if(!settings.src) settings.src = "."

console.log("Working on "+settings.src)

var child_process = require('child_process');

if (settings.mode != "nuxt") {
    var evomark_complier = child_process.spawn('node', [path.join(__dirname, '../packages/evomark-loader/index.js'), "--src", settings.src], { encoding: 'utf-8' });

    evomark_complier.stdout.on('data', function (chunk) {
        console.log("[EvoMark] " + chunk.toString());
    });
    evomark_complier.stderr.on('data', (data) => {
        console.log("[EvoMark] " + data);
    });
}

if (settings.mode != "evomark") {
    var nuxt_dev_server = child_process.spawn("yarn", ["dev"], { encoding: 'utf-8', cwd: path.join(__dirname, '../packages/evomarked-nuxt') });

    nuxt_dev_server.stdout.on('data', function (chunk) {
        console.log("[Nuxt] " + chunk.toString());
    });
    nuxt_dev_server.stderr.on('data', (data) => {
        console.log("[Nuxt] " + data);
    });
}