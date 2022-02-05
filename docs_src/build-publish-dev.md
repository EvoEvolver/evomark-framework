## Publish 

The [Nuxt3](https://v3.nuxtjs.org/) framework is a very new framework. We choose it because we expect it will be mature and perfect in the following years. Unfortunately, the static website generation function of Nuxt3 is still under developing, meaning that Evomark projects cannot be served by github page now. We expect the problem can be solved soon.

**We don't recommend people who are not expert to do the following.** If you want to make your Evomark project available on internet now, you need to have a server, with the following dependency installed
- node
- npm & yarn
- pm2

To deploy a project, you should create a folder named `.deploy` in the project's root, with a file `config.toml` inside.
The content of `config.toml` should be
=== Code {lang:"toml"}
host = "your.host.ip.addr"
ssh_key = "./key.pem"
ssh_addr = "your.server.ip.addr"
ssh_user = "your-username"
deploy_path = "./evomark-project"
===
And in `.deploy` there should be the private key `./key.pem` for the ssh server.

With `.deploy` setup, one can call 
=== Code {lang:"bash"}
yarn em-build ./your-project
yarn em-deploy ./your-project
===
to build and deploy the project.

## Development

If you are interested in develop this framework, you can first clone this repo, and setup the environment by running the following commands in the root.

=== Code {lang:"bash"}
mkdir packages
cd packages
git clone https://github.com/EvoEvolver/evomark-loader.git
git clone https://github.com/EvoEvolver/evomark-it.git
git clone https://github.com/EvoEvolver/evomarked-nuxt.git
cd ..
yarn install
===