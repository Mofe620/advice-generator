let aID = document.querySelector("#advice-id");
let aContent = document.querySelector("#advice-content");
let dice = document.querySelector(".dice");

document.onload = getAdvice();

dice.addEventListener('click', function(){
    getAdvice();
})

function getAdvice(){
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()
    aContent.classList.remove('fade');
    dice.classList.remove('spin');

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://api.adviceslip.com/advice', true)

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response) //data is now an object. 'this.response' was a string
        var adviceSlip = data.slip
        if (request.status >= 200 && request.status < 400) {
            aID.textContent = "#" + adviceSlip.id;
            aContent.textContent = '"' + adviceSlip.advice + '"';
            aContent.classList.add('fade')
            dice.classList.add('spin')
        }   else {
                console.log('error')
            }

    }

    // Send request
    request.send()

}