onst FIREBASE_DATABASE = firebase.database()

//1. Click create button
let sendBtn = document.getElementById('send'); //connect html to js. Aloow me to select btn element
sendBtn.addEventListener('click', send);

function send() {
    //2. enter data
    let review = document.getElementById('review').value;

    //3.send data to the database
    FIREBASE_DATABASE.ref('/review').push({
        review: review,
    });
} https://www.gstatic.com/mobilesdk/170215_mobilesdk/zeroState/2x/functions.png

<script>
    function iframe() {
        document.getElementById('dialog').style.display = "block";
    document.getElementById('quest').style.display = "none";
           }
           function iframe() {
        document.getElementById('dialog').style.display = "block";
    document.getElementById('quest').style.display = "none";
           }
           function topFunction() {
        document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
           }
           function secFunction() {
        document.body.scrollTop = 1915;
    document.documentElement.scrollTop = 1915;
           }
           function thiFunction() {
        document.body.scrollTop = 2600;
    document.documentElement.scrollTop = 2600;
           }
           function fouFunction() {
        document.body.scrollTop = 3200;
    document.documentElement.scrollTop = 3200;
           }
       </script>