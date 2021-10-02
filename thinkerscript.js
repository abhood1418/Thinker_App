const tags = 'love'

/*======================Fetch API Call======================*/
//=============== onClick Function & Append ==================



fetch(`https://api.quotable.io/random?tags=${tags}`)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    // console.log(`${data.content} —${data.author}`)
    console.log(data);
    // displayQuote(`${data.content} -${data.author}`);
    
  })
  .catch((error) => {
  console.log(`ERROR: ${error}`);
  })
  

const quoteSpace = document.querySelector('#quotearea');

//displayQuote function

const buttonTest = document.querySelector('#genbtn');

buttonTest.addEventListener('click', () => {
  console.log('clicked');
})
  


// const displayQuote = (quote, author) => {

//   const quoteDiv = document.createElement('div');

//   const quoteContent = document.createElement('p');
//   const quoteAuthor = document.createElement('p');

//   quoteContent.innerText = `${data.content}`;
//   quoteAuthor.innerText = `${data.author}`;

//   quoteDiv.append(quoteContent, quoteAuthor);
//   quoteSpace.append(quoteDiv);

// }


