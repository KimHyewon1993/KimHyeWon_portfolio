// row1(main)
$('.photo1-2 > div:last-child, .photo2-2 > div:last-child').fadeOut(3000);

// row2(famous-saying)
const quotes = [{
    quote: "여행은 되돌아 보았을 때에만 매력적이다.",
    egquote: "Travel is only glamorous in retrospect.",
    author: "폴 서룩스 Paul Theroux"
  },
  {
    quote: "우리 모두는 인생에서 만회할 기회라 할 수 있는 큰 변화를 경험한다.",
    egquote: "We all have big changes in our lives that are more or less a second chance.",
    author: "해리슨 포드 Harrison Ford"
  },
  {
    quote: "성숙하다는 것은 다가오는 모든 생생한 위기를 피하지 않고 마주하는 것을 의미한다.",
    egquote: "To be mature means to face, and not evade, every fresh crisis that comes.",
    author: "프리츠 쿤켈 Fritz Kunkel"
  },
  {
    quote: "덜 약속하고 더 해주어라",
    egquote: "Underpromise; overdeliver.",
    author: "톰 피터스 Tom Peters"
  },
  {
    quote: "인간은 살아있기 위해 무언가에 대한 열망을 간직해야 한다.",
    egquote: "One must desire something to be alive.",
    author: "마가렛 딜란드 Margaret Deland"
  },
  {
    quote: "웃음은 두 사람간의 가장 가까운 거리다",
    egquote: "Laughter is the closest distance between two people.",
    author: "빅터 보르게 Victor Borge"
  },
  {
    quote: "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
    egquote: "Regret for wasted time is more wasted time.",
    author: "메이슨 쿨리 Mason Cooley"
  },
  {
    quote: "우리를 조금 크게 만드는데 걸리는 시간은 단 하루면 충분하다.",
    egquote: "A single day is enough to make us a little larger.",
    author: "파울 클레 Paul Klee"
  },
  {
    quote: "나는 때를 놓쳤고, 그래서 지금은 시간이 나를 낭비하고 있는 거지.",
    egquote: "I wasted time, and now doth time waste me.",
    author: "윌리엄 셰익스피어 William Shakespeare"
  },
  {
    quote: "미래는 내일이면 더 나을 것이다.",
    egquote: "The future will be better tomorrow.",
    author: "댄 퀘일 Dan Quayle"
  }
];

const quote = document.querySelector(".quote span:first-child");
const egquote = document.querySelector(".quote span:nth-child(2)");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
egquote.innerText = todaysQuote.egquote;
author.innerText = todaysQuote.author;

$('.row2 .button').click(function(){

  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todaysQuote.quote;
  egquote.innerText = todaysQuote.egquote;
  author.innerText = todaysQuote.author;
});

// row3(gallery)
$('.gallery_img').slick({
  'nextArrow': '.arrow .right',
  'prevArrow': '.arrow .left',
  'asNavFor': '.gallery_text',
  'fade': true
});
$('.gallery_text').slick({
  'arrows': false,
  'asNavFor': '.gallery_img'
});
$('.row3_wrap .arrow a').click(function (e) {
  e.preventDefault();
});

// row5(top-button)
$('.top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 400);
  return false;
});

// footer login
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username} thank you for watching!
                          have a nice day:)`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

// footer(weather)
const API_KEY = "a4d31c7729627313908ef8a4788c62ce";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${getConditionIcon(`${data.weather[0].main}`)} ${data.weather[0].main}  ${data.main.temp}˚C`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function getConditionIcon(condition) {
    switch(condition) {
        case "Thunderstorm":
            return '⛈';
            break;
        case "Drizzle":
            return '🌦';
            break;
        case "Rain":
            return '🌧';
            break;
        case "Snow":
            return '🌨';
            break;
        case "Atmosphere":
            return '🌫';
            break;
        case "Clear":
            return '☀';
            break;
        case "Clouds":
            return '☁';
            break;
    }
}

// footer(clock)
const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);