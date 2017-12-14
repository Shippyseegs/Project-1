// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// variable declaring an array of javascript objects containing quotes
  var quotes = [
    {quote:"It always seems impossible until it is done", source:"Nelson Mandela", citation:"", year:2000},
    {quote:"Education is the most powerful weapon which you can use to change the world", source:"Nelson Mandela", citation:"Speech", year:2001},
    {quote:"Have the courage to follow your heart and intuition. They somehow know what you truly want to become", source:"Steve Jobs", citation:"", year:2003},
    {quote:"If you can\'t fly then run, if you can\'t run then walk, if you can\'t walk then crawl, but whatever you do you have to keep moving forward", source:"Martin Luther King, Jr", citation:"Speech", year:1967},
    {quote:"Be yourself, everyone is taken", source:"Oscar Wilde", citation:"", year:1965},
  ];

//defining variables
var message = '';
var viewedQuotes = [];

//function to print the randomly selected quote and insert into HTML of element with the class of "outputDiv"
function print(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
}

//a function that creates a random number between 0 and the length of quotes to randomly select an object or index of the quotes array and then to return the value of it.
function getRandomQuote() {
  var quoteObject = quotes[Math.floor(Math.random() * quotes.length)];
  return quoteObject;
}

//RandomColors function to generate random RGB values and then to return those values
function RandomColors() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var colors = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return colors;
}

//Takes the random quote function stores it into var printQuote and then adds them to message variable as a string of paragraphs and spans.
//If citation and year are undefined it does not print them.
//Resets the message variable to be '' after for a new click to generate a new quote.
//Uses the getRandomColors function to change the body's background color each time the button is clicked.
function printQuote() {
  var printQuote = getRandomQuote();
    message += '<p class ="quote">' + printQuote.quote + '</p>';
    message += '<p class ="source">' + printQuote.source + '';
  if (printQuote.citation !== undefined) {
    message += '<span class ="citation">' + printQuote.citation + '</span>';
    }
  if (printQuote.year !== undefined) {
    message += '<span class ="year">' + printQuote.year + '</span>';
    }
    message += '</p>';
  print(message);
    message = '';
  var getRandomColors = RandomColors();
  document.body.style.backgroundColor = getRandomColors;
}

// function that runs the printQuote function every 5 seconds
setInterval(function() {
  printQuote();
}, 5000);
