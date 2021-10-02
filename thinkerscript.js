const tags = 'love'

/*======================Fetch API Call======================*/
//=============== onClick Function & Append ==================




fetch(`https://api.quotable.io/random?tags=${tags}`)
  .then(response => response.json())
  .then((data) => {
    // console.log(`${responseJSON.content} —${responseJSON.author}`)
    console.log(data);
    // displayQuote(`${data.content} -${data.author}`);
    const newQuote = data.content;
    const newAuthor = data.author;
    
    
  })
  .catch((error) => {
  console.log(`ERROR: ${error}`);
  })
  

const quoteSpace = document.querySelector('#quotearea');

//displayQuote function

const displayQuote = (quote) => {

  const quoteDiv = document.createElement('div');

  const quoteContent = document.createElement('p');
  const quoteAuthor = document.createElement('p');

  quoteContent.innerText = `${data.content}`;
  quoteAuthor.innerText = `${data.author}`;

  quoteDiv.append(quoteContent, quoteAuthor);
  quoteSpace.append(quoteDiv);

}