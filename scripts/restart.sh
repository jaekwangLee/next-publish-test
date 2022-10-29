echo "------------------"
echo "build"
echo "------------------"
echo ""
npm run build

echo "------------------"
echo "pm2 restart next"
echo "------------------"
echo ""
pm2 restart next
