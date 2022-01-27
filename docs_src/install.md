---
title = "Install Evomark"
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

### Ubuntu
Here we provide script for install the dependencies on ubuntu
=== Code {lang:"bash"}
sudo apt update
sudo apt -y install nodejs # Install nodejs
sudo apt -y install # Install npm
sudo npm install -g n # Update nodejs
sudo n stable # Update nodejs
sudo npm install -g yarn
===
### Windows
For windows, you can go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/) to download and install node&npm.

Then, yarn can be installed by the installer in [https://classic.yarnpkg.com/latest.msi](https://classic.yarnpkg.com/latest.msi). **You may need to restart to make the installations into effect**.

### Get ready!

With dependencies installed, Evomark framework can be installed by (Here we install it in user's home path)
=== Code {lang:"bash"}
mkdir evomark-projects
cd evomark-projects
curl -o package.json https://raw.githubusercontent.com/EvoEvolver/evomark-starter/main/package.json
yarn
===

## Usage
In the folder that you have installed the Evomark framework, you can initialize a new project by
=== Code {lang:"bash"}
yarn em-init <project name>
===
You can preview the new project by starting a development server

=== Code {lang:"bash"}
yarn em-dev <project name/path>
===
During the run of the development server, all the change of source file will be detected automatically. Therefore, you don't need to build it by yourself.

Finally, you can go to [http://localhost:3000/](http://localhost:3000/) to see the output of Evomark. I hope you will enjoy it!