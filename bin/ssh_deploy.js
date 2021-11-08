#!/usr/bin/env node

const toml = require("toml")
const fs = require("fs")
const path = require("path")
var args = process.argv.slice(2)
var project_path = args[0] || "."
var deploy_config_path = project_path + "/.deploy"
var config_src = fs.readFileSync(deploy_config_path + "/config.toml", "utf8")
var config = toml.parse(config_src)
var combined_addr = config.ssh_addr
if (config.ssh_user) combined_addr = config.ssh_user + "@" + combined_addr
var ssh_key_path = path.join(deploy_config_path, config["ssh_key"])
var ssh_args = ["-i", ssh_key_path, combined_addr]
var output_path = path.join(__dirname, "../packages/evomarked-nuxt/.output")
var deploy_path = config.deploy_path || "~/evomark"
var scp_args = ["-i", ssh_key_path, "-r", output_path, combined_addr + ":" + deploy_path]
//console.log(scp_args.join(" "))
const spawn = require('child_process').spawn;
const spawnSync = require('child_process').spawnSync;
function runCommand(cmd, args, onEnd) {
    console.log(cmd, args)
    var cmd_runner = spawn(cmd, args, { encoding: 'utf-8' });
    cmd_runner.stdout.on('data', function (chunk) {
        console.log(chunk.toString());
    });
    cmd_runner.stderr.on('data', (data) => {
        console.log(data.toString());
    });
    cmd_runner.on('close', (data) => {
        console.log("process closed");
        onEnd()
    });
}

console.log(project_path)
spawnSync("node", [path.join(__dirname, "../packages/evomark-loader/index.js"),"--src", project_path ,"--watch", "false"], {
    encoding: 'utf-8',
    stdio: [process.stdin, process.stdout, process.stderr],
} )

spawnSync("yarn", ["build"], {
    encoding: 'utf-8',
    cwd: path.join(__dirname,"../packages/evomarked-nuxt/"),
    stdio: [process.stdin, process.stdout, process.stderr],
} )

const app_name = "evomark"
var cmd_stop_server = "sudo -- sh -c '" + ["pm2", "delete", app_name].join(" ") + "'"
var cmd_delete = ['rm', '-r', deploy_path].join(" ")
var cmd_run_server = ["pm2", "-f", "start", path.join("./server/index.mjs"), "--name", app_name].join(" ")

var cmd_first_ssh = [cmd_delete, cmd_stop_server, ""].join("; ")
var sudo_cmd = ["export NUXT_PORT=80;",
    "export NUXT_HOST=", config.host, ";", cmd_run_server].join("")
var cmd_second_ssh = [["cd", deploy_path].join(" "), "sudo -- sh -c '" + sudo_cmd + "'"].join("; ")

runCommand("ssh", ssh_args.concat([cmd_first_ssh]), () => {
    runCommand("scp", scp_args, () => {
        runCommand("ssh", ssh_args.concat([cmd_second_ssh]), () => { })
    })
})