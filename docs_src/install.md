---
title = "Install Evomark"
nextPage = "grammar-markdown"
---

=== Title ===

So far, Evomark framework has **only been tested in Linux & Windows** environment. To use it in MacOS may need special knowledge. 

Evomark Framework requires the following dependencies to install
==== List
- git
- nodejs (version 16^)
- npm
- yarn
====

## Platforms specific instructions

### Ubuntu
Here we provide script for install the dependencies on ubuntu
=== Code {lang:"bash"}
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g yarn
===
### Windows
For windows, you can go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/) to download and install node&npm.

Git can be downloaded at [https://git-scm.com/downloads](https://git-scm.com/downloads).

**You may need to restart to make the installations into effect**.

Then, yarn can be installed via npm 
=== Code {lang:"bash"}
npm install --global yarn
===
GUI installer is available on [https://github.com/yarnpkg/yarn/releases/](https://github.com/yarnpkg/yarn/releases/) for yarn v1.22.15 and older version.

Currently, the Evomark frame does not provide graphic user interface. So you need to familiarize yourself with basic usage of command lines. You may search `Powershell` for some tutorial. Installing VSCode is strongly encouraged.

### 中国用户 (Chinese users)

People inside the Chinese network may need additional setup.
- Change the npm source to the one in China by `npm config set registry https://registry.npm.taobao.org`.
- You may need tools to accelerate the access to GitHub. See [gitclone](https://www.gitclone.com/).
- After using `gitclone`, if you don't run `yarn` successfully. You may need to change to `npm install`. There might be a bug with `yarn`.


## Get ready!

With dependencies installed, Evomark framework can be installed by (Here we install it in user's home path)
=== Code {lang:"bash"}
mkdir evomark-projects  # Make a new folder for the project
cd evomark-projects # change directory to the new folder
curl -o package.json https://raw.githubusercontent.com/EvoEvolver/evomark-starter/main/package.json  # Download the project config file
yarn # Initialize the project by installing the dependencies
===

The following command is required to enable yarn scripts on windows Powershell.
=== Code {lang: "bash"}
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
===

## Usage
In the folder that you have installed the Evomark framework, you can initialize a new project by
=== Code {lang:"bash"}
yarn em-init ./your-project
===
You can preview the new project by starting a development server

=== Code {lang:"bash"}
yarn em-dev ./your-project
===
During the run of the development server, all the change of source file will be detected automatically. Therefore, you don't need to build it by yourself.

Finally, you can go to [http://localhost:3000/](http://localhost:3000/) to see the output of Evomark. I hope you will enjoy it! 

## Potential Issue

At the current version of Evomark, when you create a new page, you must restart the dev server to load the page. We hope this inconvenience can be solved in the future versions.

## Furthermore

If you want to publish your project on internet, or you are interested in develop the Evomark framework, please follow the instruction in [Build, publish and develop](build-publish-dev).
