# Zoom Downloader

## NEW

1) Install node modules
1) Open network tab in chrome dev tools for the zoom recording and find request for mp4 file
2) Right click on it and copy node fetch request
3) Paste after ```const response = await```
4) Run node on index.js
5) Downloaded video should be in downloads folder

## OLD

1) Install node modules
1) Open network tab in chrome dev tools for the zoom recording and find request for mp4 file
2) Right click on it and copy node fetch request
3) Paste contents somewhere and look for the fields corresponding to the URL, COOKIE, and REFERER process environmental variables
4) Paste these into .env-template file and rename .env-template to .env
5) Run node on index.js
6) Downloaded video should be in downloads folder