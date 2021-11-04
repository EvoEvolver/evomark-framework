echo "Compiling and preparing the server"
BASEDIR=$(dirname "$0")
node "$BASEDIR/packages/evomark-loader/index.js" --src "${PWD}/$1" --watch false
cd ./packages/evomarked-nuxt/
yarn deploy