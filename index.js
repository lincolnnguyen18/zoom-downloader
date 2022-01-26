// scp lincoln@desktop:/home/lincoln/projects/zoom-downloader/public/GMT20220125-224301_Recording_1920x1080.mp4 ~/Downloads/

import fetch from 'node-fetch';
import fs from 'fs';
import 'dotenv/config'

( async () => {
  // use chrome to copy node fetch URL and COOKIE into .env for video
  const response = await fetch(process.env.URL, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en,ja;q=0.9",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "range": "bytes=0-",
      "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "video",
      "sec-fetch-mode": "no-cors",
      "sec-fetch-site": "same-site",
      "cookie": process.env.COOKIE,
      "Referer": "https://stonybrook.zoom.us/",
      "Referrer-Policy": "origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  });
  // download video to file
  const file = fs.createWriteStream('public/GMT20220125-224301_Recording_1920x1080.mp4');
  response.body.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('finished');
  });
})();