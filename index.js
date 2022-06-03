// Your code here
const dodger = document.getElementById("dodger"); 

function moveDodgerLeft() {
    console.log(dodger.style.left);
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }


}


function moveDodgerRight() {
    console.log(dodger.style.left);
    const rightNumbers = dodger.style.left.replace("px", ""); //gets rid of px with empty string, so 400px -> 400
    const right = parseInt(rightNumbers, 10); //converts the style string e.g. "400" to an integer!

    if (right < 400) {
        dodger.style.left = `${right + 10}px`;
    }
}

function moveDodgerUp() {
    console.log(dodger.style.bottom);
    const upNumbers = dodger.style.bottom.replace("px", "");
    const up = parseInt(upNumbers, 10);

    if (up < 380) { //box is 20 pixels high
        dodger.style.bottom = `${up + 10}px`;
    }
}

function moveDodgerDown() {
    console.log(dodger.style.bottom);
    const downNumbers = dodger.style.bottom.replace("px", "");
    const down = parseInt(downNumbers, 10);

    if (down > 0) {
        dodger.style.bottom = `${down - 10}px`;
    }
}

document.addEventListener('keydown', (e) => {
    //console.log(e);
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
    else if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
    else if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
}) 