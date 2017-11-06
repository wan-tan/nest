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
	for (var key in obj) {
		el.innerHTML += '<div class="list-item"><div class="list-item-bg"></div><div class="list-item-text" data-content="' + obj[key].title + '"></div><div class="list-item-delete">x</div></div>'
	}
}

loadList('lists/thelist', function(data){
	showList(document.getElementById('list-names'),data)
})




document.getElementById('list-names-input').addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
		addName()
  }
});

function addName(){
	newItem('lists/thelist', {title:document.getElementById('list-names-input').value})
	document.getElementById('list-names').innerHTML += '<div class="list-item"><div class="list-item-bg"></div><div class="list-item-text" data-content="' + this.value + '"></div></div>'
}
