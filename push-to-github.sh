#!/bin/bash
cd /vercel/share/v0-project
git config user.email "adsense@hoteleiloty.pl"
git config user.name "AdSense Configuration"
git add -A
git commit -m "Improved website design for Google AdSense - Added premium UI, content, rich media, and AdSense slots (7410885727, 9901317699)"
git push origin website-improvement-for-adsense
echo "✅ Push completed successfully!"
