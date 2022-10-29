echo "------------------"
echo "build"
echo "------------------"
echo ""
npm run build


echo "------------------"
echo "init pm2 next"
echo "------------------"
echo ""
pm2 start npm -w -i max --name 'next' -- start
