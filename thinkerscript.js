

/*======================Fetch API Calls======================*/
//=============== onClick Functions & Appends =================
//=============== Random Quote API =========================
const quoteSpace = document.querySelector('#quotearea');
const buttonTest = document.querySelector('#genbtn')
const wordButton = document.querySelector('#wordbtn');

buttonTest.addEventListener('click', () => {

  fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
    
      const quoteContent = data.data[0].quoteText;
      const quoteAuthor = data.data[0].quoteAuthor;
  
      const displayQuote = document.createElement('div');
      const displayContent = document.createElement('p');
      const displayAuthor = document.createElement('p');

      displayQuote.classList.add('display-div');
      displayContent.classList.add('display-content');
      displayAuthor.classList.add('display-author');

      displayContent.append(`"${quoteContent}"`);
      displayAuthor.append(`~ ${quoteAuthor}`);
      displayQuote.append(displayContent, displayAuthor);
      quoteSpace.append(displayQuote);

    })
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    })
})

// ========== Word API Fetch and onClick Functions ==============

wordButton.addEventListener('click', () => {

fetch(`https://random-words-api.vercel.app/word`)
  .then((result) => {
    return result.json();
  }).then((data) => {
    console.log(data);

    const wordName = data[0].word;
    const wordPronounce = data[0].pronunciation;
    const wordDefinition = data[0].definition;

    const displayWordDiv = document.createElement('div');
    const displayWord = document.createElement('p');
    const displayPronounce = document.createElement('p');
    const displayDefinition = document.createElement('p');

    displayWordDiv.classList.add('word-div');
    displayWord.classList.add('word-name');
    displayPronounce.classList.add('word-pron');
    displayDefinition.classList.add('word-def');

    displayWord.append(`New Word: ${wordName}`);
    displayPronounce.append(`How to Pronounce: ${wordPronounce}`);
    displayDefinition.append(`What it means: ${wordDefinition}`);

    displayWordDiv.append(displayWord, displayPronounce, displayDefinition);

    quoteSpace.append(displayWordDiv);
})
})

// ======================= Meditate Feature ==================== //

const meditateButton = document.querySelector('#meditatebtn');
meditateButton.addEventListener('click', () => {
  quoteSpace.innerHTML = ('');
})