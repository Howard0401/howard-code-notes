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
npm run build
setProjectName
git add public && git commit -m "init web"
git subtree push --prefix public origin gh-pages