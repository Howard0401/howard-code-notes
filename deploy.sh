#!/bin/sh

setProjectName() {
    case `uname` in
    "Darwin")
        sed -i '' 's|Vue App=*|'Howard-Notes'|g' './public/index.html'
    ;;
    "Linux")
        sed -i 's|Vue App=*|'Howard-Notes'|g' './public/index.html'
    ;;
    esac
}

# scripts
set -e
rm -rf ./public
npm run build
setProjectName
git add public && git commit -m "init web"
# https://stackoverflow.com/questions/33172857/how-do-i-force-a-subtree-push-to-overwrite-remote-changes
git push origin `git subtree push --prefix public origin gh-pages` :gh-pages --force
git subtree push --prefix public origin gh-pages