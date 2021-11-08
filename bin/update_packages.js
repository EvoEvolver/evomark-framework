#!/usr/bin/env node

const spawnSync = require('child_process').spawnSync;
function runCmdSync(cmd, args, cwd) {
    spawnSync(cmd, args, {
        encoding: 'utf-8',
        cwd: cwd || process.cwd(),
        stdio: [process.stdin, process.stdout, process.stderr],
    })
}

const path = require('path')

var package_root = path.join(__dirname, "../packages")

runCmdSync("git", ["pull"], path.join(__dirname, ".."))
runCmdSync("git", ["pull"], package_root + "/evomark-loader")
runCmdSync("git", ["pull"], package_root + "/evomark-it")
runCmdSync("git", ["pull"], package_root + "/evomarked-nuxt")