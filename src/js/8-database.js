var config = {
	apiKey: "AIzaSyAcfUNIYDNSaZSb4DwHUMhgRYGWds6oE0w",
	authDomain: "nest-16f79.firebaseapp.com",
	databaseURL: "https://nest-16f79.firebaseio.com/",
	storageBucket: "nest-16f79.appspot.com"
};
firebase.initializeApp(config);
var ref = firebase.database().ref()




function newItem(dir, data) {
	var newPostKey = ref.child(dir).push().key;
	ref.child(dir).child(newPostKey).set(data);
}

function loadList(dir, callback){
	ref.child(dir).once('value').then(function(snapshot){
		callback(snapshot.val())
	});
}


function showList(el, obj){
	// var content
	var i = 0
	for (var key in obj) {
		// console.log(obj[key].title);
		i++
		el.innerHTML += '<div class="list-item"><div class="list-item-bg"></div><div class="list-item-text" data-content="' + obj[key].title + '"></div></div>'
		// console.log(.writeText
		writeText(el.querySelectorAll('.list-item-text')[i], 2, 10 + i*50)
	}
// el.innerHTML = content


	// writeText(el, 2, 10)
}

// var listItemTextAnim = anime({
//   targets: '.list .list-item .list-item-text',
//   translateX: 0,
//   delay: function(el, i){
//     // console.log(i);
//     setTimeout(function(){
//       // console.log("a")
//       writeText(el, 2, 10)
//     }, i * 110 )
//     return i * 10
//   },
//   update: function(el, i){
//     // console.log("1");
//   },
//   easing: 'easeInOutQuad',
//   duration: animSpeed,
//   autoplay: true,
//   loop: false
// });


// var content = ''
// for (var i = 0; i < data.length; i++) {
// 	// console.log(data[i]);
//
// }
// console.log(content);

// loadList('lists', function(data){console.log(data);})


loadList('lists/thelist', function(data){
	showList(document.getElementById('list-names'),data)
})
