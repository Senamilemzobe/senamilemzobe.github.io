const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Senamile's GOD", "Lord of Lords", "King of Kings", "Coming", "Friend", "Love", "Risen", "The Way, Truth and Life",
 "Messiah", "Mediator", "The Christ", "Lamb of God", "Bridegroom", "Living Water", "Redeemer", "Tree of Life", 
 "Strong Tower", "Deliverer", "The Door", "Yeshua", "Author and Finisher of our Faith", "Lion of the Tribe of Judah", 
 "The Great Physician", "The Good Shepherd", "Alpha and Omega","Chief Cornerstone", "Faithful and True", "The Great High Priest",
 "The Word of God", "The Great 'I AM'", "Prince of Peace","Bread of Life", "Son of God", "my Refuge"  
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});