# Evomark Framework

Evomark Framework is a system which enables intuitive plain-text based content production. It contains the following parts:

1. [evomark-it](https://github.com/EvoEvolver/Evomark-it): The parser for the Evomark marking language, which shares a lot grammar with markdown. The parser is build based on [markdown-it](https://github.com/markdown-it/markdown-it). 
1. evomark-loader: A small development server which detect the change of Evomark source files and compile them in real-time. The compiled vue-based Evomark intermediate representation (Evomark-ir) will be sent to a front-end framework to be presented. So far, 
    - We have developed
        1. [evomarked-nuxt](https://github.com/EvoEvolver/Evomarked-nuxt): a framework based on Nuxt3 for presenting the Evomark-ir in an organized website.
    - We are planing to develop
        1. evomarked-latex: a framework for organize the Evomark-it in order to produce .pdf files.
        2. latex2Evomark: a translator to translate LaTeX codes into Evomark

## Discuss

Interested? Meet us on
[![Gitter](https://badges.gitter.im/EvoEvolver/community.svg)](https://gitter.im/EvoEvolver/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) !

## Install

So far, Evomark framework has **only been tested in linux** environment. To use them in Windows or MacOS may need special knowledge. 

Evomark Framework requires the following dependencies to install
- git
- nodejs
- npm
- yarn

Here we provide script for install the dependencies on ubuntu
```bash
sudo apt update
sudo apt -y install nodejs # Install nodejs
sudo apt -y install npm # Install npm
sudo npm install -g n # Update nodejs
sudo n stable # Update nodejs
sudo npm install -g yarn
```

With dependencies installed, Evomark framework can be installed by (Here we install it in user's home path)
```bash
mkdir evomark-projects
cd evomark-projects
curl https://raw.githubusercontent.com/EvoEvolver/evomark-starter/main/package.json>>package.json
yarn
```

## Usage
In the folder that you have installed the Evomark framework, you can initialize a new project by
```bash
em-init <project name>
```
You can preview the new project by starting a development server

```bash
em-dev --src <project name/path>
```
During the run of the development server, all the change of source file will be detected automatically. Therefore, you don't need to build it by yourself.

## Publish 

The [Nuxt3](https://v3.nuxtjs.org/) framework is a very new framework. We choose it because we expect it will be mature and perfect in the following years. Unfortunately, the static website generation function of Nuxt3 is still under developing, meaning that Evomark projects cannot be served by github page now. We expect the problem can be solved soon.

**We don't recommend people who are not expert to do the following.** If you want to make your Evomark project available on internet now, you need to have a server, with the following dependency installed
- node
- npm & yarn
- pm2

To deploy a project, you should create a folder named `.deploy` in the project's root, with a file `config.toml` inside.
The content of `config.toml` should be
```toml
host = "your.host.ip.addr"
ssh_key = "./key.pem"
ssh_addr = "your.server.ip.addr"
ssh_user = "your-username"
deploy_path = "./evoevolver"
```
And in `.deploy` there should be the private key `./key.pem` for the ssh server.

With `.deploy` setup, one can call `em-deploy --src <project name/path>`  to deploy.

You may check the source code to see what is actual happening.

## Development

If you are interested in develop this framework, you can first clone this repo, and setup the environment by running the following commands in the root.

```bash
mkdir packages
cd packages
git clone https://github.com/EvoEvolver/evomark-loader.git
git clone https://github.com/EvoEvolver/evomark-it.git
git clone https://github.com/EvoEvolver/evomarked-nuxt.git
cd ..
yarn install
```