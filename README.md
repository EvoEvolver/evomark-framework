# EvoMark Framework

EvoMark Framework is a system which enables intuitive plain-text based content production. It contains the following parts:

1. [evomark-it](https://github.com/EvoEvolver/evomark-it): The parser for the EvoMark marking language, which shares a lot grammar with markdown. The parser is build based on [markdown-it](https://github.com/markdown-it/markdown-it). 
1. evomark-loader: A small development server which detect the change of EvoMark source files and compile them in real-time. The compiled vue-based evomark intermediate representation (evomark-ir) will be sent to a front-end framework to be presented. So far, 
    - We have developed
        1. [evomarked-nuxt](https://github.com/EvoEvolver/evomarked-nuxt): a framework for presenting the evomark-ir in an organized website.
    - We are planing to develop
        1. evomarked-latex: a framework for organize the evomark-it in order to produce .pdf files.

## Install

So far, EvoMark Framework has **only been tested in linux** environment. To use them in Windows or MacOS may need special knowledge. 

EvoMark Framework requires the following dependencies to install
- git
- nodejs
- npm
- yarn

Here we provide script for install the dependencies on ubuntu
```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
sudo npm cache clean -f
sudo npm install -g n # Update nodejs
sudo n stable # Update nodejs
sudo npm install -g yarn
```

With dependencies installed, Evomark Framework can be installed by (Here we install it in user's home path)
```bash
cd 
git clone https://github.com/EvoEvolver/evomark-framework.git
cd evomark-framework
yarn setup
```

## Usage

To start a EvoMark Project, you need to be in the directory where EvoMark Framework is setup.
```bash
cd ~/evomark-framework
```
We recommend you to work with vscode by
```bash
code ~/evomark-framework
```
You can initialize a new project by
```bash
yarn project [your project name]
```
You can preview the new project by starting a development server
```
yarn dev --src [your project name]
```
Or you can preview the document by
```
yarn dev --src docs_src
```
During the run of the development server, all the change of source file with be detected automatically. Therefore, you don't need to build it by your self.

## Publish 

The [Nuxt3](https://v3.nuxtjs.org/) framework is a very new framework. We choose it because we expect it will be mature and perfect in the following years. Unfortunately, the static website generation function of Nuxt3 is still under developing, meaning that EvoMark projects cannot be served by github page now. We expect the problem can be solved soon.

**We don't recommend people who are not expert to do the following.** If you want to make your evomark project available on internet now, you need to have a server, with the following dependency installed
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

With `.deploy` setup, one can call `./build_deploy.sh [project-path]` in the root of EvoMark Framework to deploy.

You may check the source code to see what is actual happening.