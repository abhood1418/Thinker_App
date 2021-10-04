// const tags = 'love'

/*======================Fetch API Call======================*/
//=============== onClick Function & Append ==================
const quoteSpace = document.querySelector('#quotearea');
const buttonTest = document.querySelector('#genbtn')

buttonTest.addEventListener('click', () => {
  console.log('clicked');

  fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);

      const quoteContent = data.data[0].quoteText;
      const quoteAuthor = data.data[0].quoteAuthor;
  
      const displayQuote = document.createElement('div');
      const displayContent = document.createElement('p');
      const displayAuthor = document.createElement('p');
  
      displayContent.append(quoteContent);
      displayAuthor.append(quoteAuthor);
      displayQuote.append(displayContent, displayAuthor);
      quoteSpace.append(displayQuote);

    })
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    })
})


//Original API used. Server went down.

// fetch(`https://api.quotable.io/random?tags=${tags}`)
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
    // console.log(`${data.content} —${data.author}`)
    // console.log(data);
    
//     const quoteContent = data.content;
//     const quoteAuthor = data.author

//     const displayQuote = document.createElement('div');
//     const displayContent = document.createElement('p');
//     const displayAuthor = document.createElement('p');

//     displayContent.append(quoteContent);
//     displayAuthor.append(quoteAuthor);
//     displayQuote.append(displayContent, displayAuthor);
//     quoteSpace.append(displayQuote);
//   })
//   .catch((error) => {
//   console.log(`ERROR: ${error}`);
//   }) 