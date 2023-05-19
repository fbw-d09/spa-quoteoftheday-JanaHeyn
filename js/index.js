const quotes = [
    'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    "Don't watch the clock; do what it does. Keep going.",
    'The secret of getting ahead is getting started.',
    'Well done is better than well said.',
    'You miss 100% of the shots you don’t take.',
    'A goal is a dream with a deadline.',
    'Outstanding people have one thing in common: An absolute sense of mission.',
    'Trying is winning in the moment.',
    'Fall down seven times and stand up eight.',
    "You just can't beat the person who never gives up.",
    'There is little success where there is little laughter.',
    'We cannot solve our problems with the same thinking we used when we created them.'
  ];

// Write your Javascriot code here
const button = document.getElementById('btn');
const outputQuoteElement = document.getElementById('outputQuote');


button.addEventListener('mouseover', (event) => {
  button.style.backgroundColor = '#568e8f';
  button.style.boxShadow = 'rgba(38, 38, 38, 0.3) 1px 5px 12px';
  button.style.transform = 'translateY(-1px)';
});

button.addEventListener('mouseout', (event) => {
  button.style.backgroundColor = '#5f9ea0';
  button.style.boxShadow= 'rgba(38, 38, 38, 0.2) 1px 3px 5px';
  button.style.transform = 'translateY(0px)';
})

button.addEventListener('mousedown', (event) => {
  button.style.backgroundColor = '#4d7f80';
  button.style.boxShadow = 'rgba(38, 38, 38, 0.25) 0 2px 4px';
  button.style.transform = 'translateY(0px)';
});

button.addEventListener('mouseup', (event) => {
  button.style.backgroundColor = '#568e8f';
  button.style.boxShadow = 'rgba(38, 38, 38, 0.3) 1px 5px 12px';
  button.style.transform = 'translateY(-1px)';
})


button.addEventListener('click', (event) => {
  let quotesIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[quotesIndex];
  outputQuoteElement.value = randomQuote;
}); 


