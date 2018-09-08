let color = document.getElementById('color');
let body = document.getElementById('body');
let font = document.getElementById('font');
let quiz = document.getElementById('quiz');
let pic = document.getElementById('pic');
let img = document.getElementById('img');

let stroredColor = localStorage.getItem("color");
color.value = stroredColor;
body.style.backgroundColor = stroredColor;

let storedFont = localStorage.getItem('font');
font.value = storedFont;
quiz.style.fontFamily = storedFont;

let storedPic = localStorage.getItem('pic');
pic.value = storedPic;
img.setAttribute("src", storedPic);

color.addEventListener('change', function() {
  localStorage.setItem('color', color.value);
  body.style.backgroundColor = color.value;
});

font.addEventListener('change', function() {
  localStorage.setItem('font', font.value);
  quiz.style.fontFamily = font.value;
});

pic.addEventListener('change', function() {
  localStorage.setItem('pic', pic.value);
  img.setAttribute('src', pic.value);
});
