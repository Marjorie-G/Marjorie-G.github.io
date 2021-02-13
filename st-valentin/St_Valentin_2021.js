
let isDisplay = false;

function displayText() {

    if (isDisplay === false) {
        document.getElementById("js-text").className= "";
        isDisplay = true;
    }
    else {
        document.getElementById("js-text").className= "text-visibility";
        isDisplay = false;
    }

}