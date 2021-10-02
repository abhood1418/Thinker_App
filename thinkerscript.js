const tags = 'love';

fetch(`https://api.quotable.io/random?tags=${tags}`)
  .then(response => response.json())
  .then(data => {
    console.log(`${data.content} —${data.author}`)
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  })