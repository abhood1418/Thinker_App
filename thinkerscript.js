const tags = 'love'

/*======================Fetch API Call======================*/
//=============== onClick Function & Append ==================
const quoteSpace = document.querySelector('#quotearea');
const buttonTest = document.querySelector('#genbtn')

buttonTest.addEventListener('click', () => {
  console.log('clicked');


fetch(`https://api.quotable.io/random?tags=${tags}`)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    // console.log(`${data.content} —${data.author}`)
    console.log(data);
    displayQuote(tags);
  })
  // .catch((error) => {
  // console.log(`ERROR: ${error}`);
  // }) 
})

//displayQuote function
const quote = tags;
const displayQuote = (quote) => {
    
  const addQuoteDiv = document.createElement('div');
    
  const quoteContent = document.createElement('p');
  const quoteAuthor = document.createElement('p');

  quoteContent.innerText = `${tags.content}`;
  quoteAuthor.innerText = `${tags.author}`;

  addQuoteDiv.append(quoteContent, quoteAuthor);
  quoteSpace.append(addQuoteDiv);
  };


