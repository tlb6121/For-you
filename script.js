```javascript
/* =================================
   OPEN ENVELOPE
================================= */

function openEnvelope() {

    const envelope =
        document.getElementById("envelope");

    const intro =
        document.getElementById("intro");

    const mainPage =
        document.getElementById("mainPage");


    /* Prevent clicking again */

    if (
        envelope.classList.contains("open")
    ) {
        return;
    }


    /* Open envelope */

    envelope.classList.add("open");


    /*
       Wait until the letter
       comes out of the envelope.
    */

    setTimeout(() => {

        /* Fade out intro */

        intro.classList.add("hide");

    }, 1800);


    /*
       Show your message
    */

    setTimeout(() => {

        mainPage.classList.add("show");

    }, 2200);

}
```
