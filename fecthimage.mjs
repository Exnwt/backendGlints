import express from 'express';
import fetch from 'node-fetch' ;
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));
app.use(cors({origin:true}));




fetch('https://www.flickr.com/services/feeds/photos_public.gne?format=json')
  .then((response) => response.text())
  .then((text) => {
    // remove the jsonFlickrFeed( ... ) and parse the remaining text as an object
    const data = JSON.parse(text.slice(15, -1));
    console.log(data);

  })
  .catch((error) => {
    console.log(error);
    // Handle the error
  });