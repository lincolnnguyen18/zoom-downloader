# Zoom Downloader

## NEW

1) Install node modules
2) Open network tab in chrome dev tools and find request for mp4 file of the zoom recording
3) Right click on it and copy node fetch request
4) Paste after ```const response = await```
5) Run node on index.js
6) Downloaded video should be in downloads folder

## OLD

1) Install node modules
2) Open network tab in chrome dev tools and find request for mp4 file of the zoom recording
3) Right click on it and copy node fetch request
4) Paste contents somewhere and look for the fields corresponding to the URL, COOKIE, and REFERER process environmental variables
5) Paste these into .env-template file and rename .env-template to .env
6) Run node on index.js
7) Downloaded video should be in downloads folder