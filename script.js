```javascript
/* =========================
   ENVELOPE CLICK
========================= */

const envelope =
    document.getElementById("envelope");

const intro =
    document.getElementById("intro");

const messagePage =
    document.getElementById("messagePage");


envelope.addEventListener("click", function () {

    /* Open envelope */

    envelope.classList.add("open");


    /*
        Wait for the envelope
        animation to finish.
    */

    setTimeout(function () {

        /* Hide intro */

        intro.classList.add("hide");

    }, 1700);


    /*
        Show your message
    */

    setTimeout(function () {

        messagePage.classList.add("show");

    }, 2100);

});
```
