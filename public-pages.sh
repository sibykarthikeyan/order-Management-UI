#!/usr/bin/env sh
# git init
# git config user.name "sibykarthikeyan" && git config user.email "siby.karthii@gmail.com"
# if [-z "$1"]
# then
#   heroku create
# else
#   heroku create $1
# fi
# git add .
# git commit -m "Heroku commit"
# git push heroku master
ng build -bh order-Management-UI --aot -prod;
cd dist/;
git init;
git config user.name "sibykarthikeyan" && git config user.email "siby.karthii@gmail.com";
# git remote add origin git@github.com:sibykarthikeyan/order-Management-UI.git
git add .;
git commit -m "github code push"

git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
