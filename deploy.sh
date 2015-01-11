mkdir ghpages
cp -R ./public/* ./ghpages/
cd ghpages
git init
git remote add origin https://github.com/vieiralucas/snake.git
git checkout -b gh-pages
git add .
git commit -m "xpto"
git push origin gh-pages --force
cd ..
rm -rf ghpages
echo "Finish deploy"
exit 0
