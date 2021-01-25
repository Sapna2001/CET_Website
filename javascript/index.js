// items
const quotesList = [
    {
        quotes : "Education is the most powerful weapon which you can use to change the world",
        author : "Nelson Mandela",
    },
    {
        quotes : "Live as if you were to die tomorrow. Learn as if you were to live forever",
        author : "Mahatma Gandhi",
    },
    {
        quotes : "The cure for boredom is curiosity. There is no cure for curiosity",
        author : "Dorothy Parker",
    },
    {
        quotes : "If You are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people",
        author : "Chinese Proverb",
    },
    {
        quotes : "It’s not that I’m so smart, it’s just that I stay with problems longer",
        author : "Albert Einstein",
    },
    {
        quotes : "Teachers open the door, but you must enter by yourself",
        author : "Chinese Proverb",
    },
    {
        quotes : "An investment in knowledge pays the best interest",
        author : "Benjamin Franklin",
    },
    {
        quotes : "The beautiful thing about learning is that no one can take it away from you",
        author : "B. B. King",
    },
    {
        quotes : "Education is simply the soul of a society as it passes from one generation to another",
        author : "G.K. Chesterton",
    },
    {
        quotes : "The whole purpose of education is to turn mirrors into windows",
        author : "Sydney J. Harris",
    },
] ;

const quoteContainer = document.querySelector(".quoteContainer");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const topButton = document.getElementById("topButton");
const login = document.getElementById("login");
const user = document.getElementById("user");
const loginButton = document.getElementById("loginButton");
const userType = document.querySelector(".userType");

// onload
window.onload = function() {
    document.getElementById("button").onclick = function() {
      document.getElementById("popup").style.display = "none"
    };
    user.style.display = "none";
};

// scroll
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// quote
function display() {
    let random = Math.floor((Math.random() * 10)); 
    let paragraphQuote = document.createElement("P");
    let paragraphAuthor = document.createElement("P");
    let textQuote = document.createTextNode(quotesList[random].quotes+".");
    let textAuthor = document.createTextNode("-" + quotesList[random].author);
    paragraphQuote.appendChild(textQuote);
    paragraphAuthor.appendChild(textAuthor);
    quoteContainer.appendChild(paragraphQuote);
    quoteContainer.appendChild(paragraphAuthor);
    paragraphQuote.classList.add("quote");
    paragraphAuthor.classList.add("author");
}

display();

// login
function loginFuction() {
    login.style.display = "block";
    document.getElementById("popup").style.display = "none"
    document.getElementById("closeLogin").onclick = function() {
        login.style.display = "none";
    }
}

function loginValue(userType) {
    user.style.display = "block";
    userType.innerHTML = userType.toUpperCase();
    loginButton.style.display = "none";
}
