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

runCmdSync("yarn", [])
runCmdSync("mkdir", [package_root])
runCmdSync("git", ["clone", "https://github.com/EvoEvolver/evomark-loader.git"], package_root)
runCmdSync("git", ["clone", "https://github.com/EvoEvolver/evomark-it.git"], package_root)
runCmdSync("git", ["clone", "https://github.com/EvoEvolver/evomarked-nuxt.git"], package_root)
runCmdSync("yarn", [], package_root + "/evomark-loader")
runCmdSync("yarn", [], package_root + "/evomark-it")
runCmdSync("yarn", [], package_root + "/evomarked-nuxt")