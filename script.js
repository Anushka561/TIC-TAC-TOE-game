
let sound=new Audio("sound.mp3");
let turnaudio= new Audio("turn.mp3")
const show = document.getElementById("x-or-o")
let turn = "X";

// check whose turn
const whoseturn = () => {

    return turn === "X" ? "O" : "X";
}

// check who won
const whowon = () => {
    let gridbox = document.getElementsByClassName("box");
    let wincombo = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [4, 3, 5],
        [6, 7, 8],
    ]


    wincombo.forEach(e => {
        if (gridbox[e[0]].innerText === gridbox[e[1]].innerText && gridbox[e[0]].innerText === gridbox[e[2]].innerText &
            gridbox[e[0]].innerText !== "") {
            restart.style.display = "none";
            confettiFalling();
            sound.play();
            document.getElementById("winner").innerText = turn;
            document.getElementById("winningmessage").style.display = "flex";
            let timeleft = 0;
            let sec = setInterval(() => {
                if (timeleft >= 5) {
                    clearInterval(sec);
                    document.getElementById("counting").innerText = "";
                }
                document.getElementById("counting").innerText = 5 - timeleft;
                timeleft += 1;
            }, 1000);

            setTimeout(() => {
                restart.style.display = "block";

            }, 6000);

        }
    })
}

// display the x or o

let boxes = document.querySelectorAll(".box");
boxes.forEach(cell => {
    cell.addEventListener("click", () => {

turnaudio.play();
        if (cell.innerText == "") {

            cell.innerText = turn === "X" ? "X" : "O";
        }
        ///////
        if (cell.innerText === "X") {
            cell.style.color = "green";
        } else {
            cell.style.color = "blue";
        }
        whowon();
        turn = whoseturn();     //CHANGE TURN
        if (cell.innerText === "X") {
            show.style.color = "blue";
        } else {
            show.style.color = "green";
        }
        if (boxes.innerText !== "") {

            document.getElementById("x-or-o").innerText = "DrW";
        }
        document.getElementById("x-or-o").innerText = cell.innerText === "X" ? "O" : "X";

    })
})
let restart = document.getElementById("restart");
restart.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(cell => { cell.innerText = ""; })
    document.getElementById("winningmessage").style.display = "none";

    document.getElementById("x-or-o").innerText = turn;
    endgame = false;

})

