alert("Hacé clic sobre la pieza de rompecabezas.")

let strikerMode = "bench";

let monsterSound = document.querySelector("#egoist_music");

let yoichi = document.querySelector("#yoichi");
let piece = document.querySelector("#piece");

piece.addEventListener("click",()=>{ 
    controlBestStriker()
})

function controlBestStriker() {
    if (strikerMode == "bench") {
        strikerMode = "playing";
        crowd()
        // yoichi.classList.remove("best_striker");
        yoichi.classList.add("found_piece");
    } else { 
        strikerMode = "bench";
        crowd()
        yoichi.classList.remove("found_piece");
    }
}

function crowd() {
    if (monsterSound.paused) {
        monsterSound.play();
    } else {
        monsterSound.pause();
        monsterSound.currentTime=0;
    }
}