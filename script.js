```javascript
const envelope =
    document.getElementById("envelope");

const heart =
    document.getElementById("heart");

const intro =
    document.getElementById("intro");

const messagePage =
    document.getElementById("messagePage");


/*
    CLICK HEART
*/

heart.addEventListener("click", function (event) {

    /*
        Prevent the click from
        doing anything else.
    */

    event.stopPropagation();


    /*
        OPEN ENVELOPE
    */

    envelope.classList.add("open");


    /*
        After the letter comes out,
        hide the intro.
    */

    setTimeout(function () {

        intro.classList.add("hide");

    }, 1800);


    /*
        Show the actual message.
    */

    setTimeout(function () {

        messagePage.classList.add("show");

    }, 2100);

});
```
