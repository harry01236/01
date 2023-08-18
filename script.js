const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const body = document.body;
const changeBackgroundBtn = document.getElementById('changeBackgroundBtn');

const backgroundImages = [
    'n2.jpg',
    'n3.jpg',
    'n4.jpg',
    'n5.jpeg',
    'n6.jpg',
    'n7.jpg',
    'n8.jpg',
    'n1.jpg'
];


let currentBackgroundIndex = 0;

changeBackgroundBtn.addEventListener('click', () => {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    const newBackgroundImage = backgroundImages[currentBackgroundIndex];
    body.style.backgroundImage = `url('${newBackgroundImage}')`;
});

//Hamburegr-js-codes
const menuIcon = document.getElementById('menuIcon');
const navList = document.getElementById('navList');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

//Clock-js-Codes
function updateClock() {
    const now = new Date();

    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');

    const hourDeg = (hour % 12) * 30 + (minute / 2);
    const minuteDeg = minute * 6 + (second / 10);
    const secondDeg = second * 6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

//Right-Click-Disabled:
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

//Clickable-Image
const clickableImage = document.getElementById('clickable-image');
  
clickableImage.addEventListener('click', function() {
  window.open('https://www.google.com/maps/place/%E0%A4%A7%E0%A4%A8%E0%A5%81%E0%A4%B7%E0%A4%BE+%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A4%BE/@26.8501393,85.4301205,10z/data=!3m1!4b1!4m6!3m5!1s0x39ec10de9587fa25:0x1372d7ca3b524b51!8m2!3d26.8350474!4d86.0121573!16zL20vMDhja3k2?entry=ttu', '_blank'); // Replace with your desired URL
});

//Typewritter js code
const sentenceElement = document.getElementById('sentence');
const sentences = [
  "I'm Siddhant.",
  "Turning Ideas into Reality.",
  "Have a good visit to my website!"
];

let currentSentenceIndex = 0;
let charIndex = 0;
let isBlank = false;

function type() {
  if (currentSentenceIndex >= sentences.length) {
    currentSentenceIndex = 0; // Reset to the first sentence
  }
  
  const currentSentence = sentences[currentSentenceIndex];
  if (charIndex < currentSentence.length) {
    sentenceElement.textContent += currentSentence.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Adjust the typing speed here (in milliseconds)
  } else {
    if (!isBlank) {
      isBlank = true;
      setTimeout(erase, 1500); // Wait before erasing
    }
  }
}

function erase() {
  if (sentenceElement.textContent.length > 0) {
    sentenceElement.textContent = sentenceElement.textContent.slice(0, -1);
    setTimeout(erase, 50); // Adjust the erasing speed here (in milliseconds)
  } else {
    isBlank = false;
    charIndex = 0;
    currentSentenceIndex++;
    setTimeout(type, 500); // Wait before typing next sentence
  }
}

type();




