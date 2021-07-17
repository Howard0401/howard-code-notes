set -e
npm run build
git add public && git commit -m "init web"
git subtree push --prefix public origin gh-pages