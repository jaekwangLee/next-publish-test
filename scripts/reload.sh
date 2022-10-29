echo "------------------"
echo "build"
echo "------------------"
echo ""
npm run build

echo "------------------"
echo "pm2 reload next"
echo "------------------"
echo ""
pm2 restart next
