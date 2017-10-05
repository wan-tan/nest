var animSpeed = 800




function fillList(id, data){
  var content = ''
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
    content += '<div class="list-item"><div class="list-item-bg"></div><div class="list-item-text" data-content="' + data[i] + '"></div></div>'
  }
  console.log(content);
  id.innerHTML = content
}


fillList(document.getElementById('list-names'), names)
fillList(document.getElementById('list-missions'), missions)


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var headlineAnim = anime({
  targets: '.headline .background',
  scaleX: [0, 1],
  easing: 'easeInOutQuint',
  duration: animSpeed-200,
  delay: function(el, i){
    return i * 300
  },
  autoplay: true,
  loop: false
});


var headlineFlickerAnim = anime({
  targets: '.headline .background',
  opacity: [.8, 1, .9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  duration: 3400,
  autoplay: false,
  loop: true
});

var underlineAnim = anime({
  targets: '.headline .underline',
  scaleX: [0, 1],
  easing: 'easeInOutQuint',
  duration: animSpeed,
  delay: function(el, i){
    return i * 100
  },
  autoplay: true,
  loop: false
});

var listItemBgAnim = anime({
  targets: '.list .list-item .list-item-bg',
  scaleX: [0, 1],
  delay: function(el, i){
    return i * 100
  },
  easing: 'easeInOutQuad',
  duration: animSpeed + 100,
  autoplay: true,
  loop: false
});

var listItemTextAnim = anime({
  targets: '.list .list-item .list-item-text',
  translateX: 0,
  delay: function(el, i){
    // console.log(i);
    setTimeout(function(){
      // console.log("a")
      writeText(el, 2, 10)
    }, i * 110 )
    return i * 10
  },
  update: function(el, i){
    // console.log("1");
  },
  easing: 'easeInOutQuad',
  duration: animSpeed,
  autoplay: true,
  loop: false
});


var writtenTextAnim = anime({
  targets: '.written',
  translateX: 0,
  delay: function(el, i){
    // console.log(i);
    setTimeout(function(){
      // console.log("a")
      writeText(el, 5, 20)
    }, i * 500 )
    return i * 10
  },
  update: function(el, i){
    // console.log("1");
  },
  easing: 'easeInOutQuad',
  duration: animSpeed,
  autoplay: true,
  loop: false
});



function writeText(el, randomness, randomDelay){
  // var el = document.getElementById(el)
  var randomSymbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "#", "&"]
  var randomSymbols = ["/", "(", ")", "[", "]"]
  var randomSymbols = ["#", "*", "+", "%", "&", "§"]
  var text = el.dataset.content
  var newLetter = ""
  var randomLetter = ""
  var output = ""
  if(!randomness){ randomness = 4 }
  if(!randomDelay){ randomDelay = 15 }
  var letterDelay = randomDelay * randomness

  // WRITE LETTERS
  for (var i = 0; i < text.length; i++) {

    // RANDOM SYMBOLS
    for (var j = 0; j < randomness; j++) {
      randomLetter = randomSymbols[getRandomInt(0, randomSymbols.length - 1)]
      randomLetter = '<div class="random-letter">' + randomLetter + '</div>'
      writeLetter(el, output + randomLetter, i * letterDelay + j *  randomDelay)
    }

    // actually add new letterllo
    output += text[i]
    writeLetter(el, output, i * letterDelay + (j+1)* randomDelay)
  }
}

function writeLetter(el, input, delay){
  setTimeout(function(){
    el.innerHTML = input
  }, delay)
}



// Get all elements with the class .written
// var writtenText = document.querySelectorAll('.written')
// for (var i = 0; i < writtenText.length; i++) {
//   writeText(writtenText[i])
// }
