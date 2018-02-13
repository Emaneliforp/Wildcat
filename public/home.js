const FIREBASE_DATABASE = firebase.database().ref()

//1. Click create button
let sendBtn = document.getElementById('send'); //connect html to js. Aloow me to select btn element
sendBtn.addEventListener('click', send);

function send() {
    //2. enter data
    let review = document.getElementById('reivew');

    //3.send data to the database
    FIREBASE_DATABASE.ref('/review').push({
        review: review,
    });
}