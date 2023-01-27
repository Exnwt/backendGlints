import fetch from 'node-fetch' ;

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