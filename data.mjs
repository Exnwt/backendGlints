import express from 'express';
import fetch from 'node-fetch' ;
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));
app.use(cors({origin:true}));


async function flickr() {
  const response = await fetch(
    "https://www.flickr.com/services/feeds/photos_public.gne?format=json"
  );
  const data = await response.text();
  return JSON.parse(data.slice(15,-1));
}

// fetch('https://www.flickr.com/services/feeds/photos_public.gne?format=json')
//   .then((response) => response.text())
//   .then((text) => {
//     // remove the jsonFlickrFeed( ... ) and parse the remaining text as an object
//     const data = JSON.parse(text.slice(15, -1));

//   })
//   .catch((error) => {
//     console.log(error);
//     // Handle the error
//   });

  app.get("/", async (req,res)=> {
    const data = await flickr();
    res.json({data});
    console.log(data);
  })