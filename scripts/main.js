let resumeBtn = document.getElementById("btn-resume");
resumeBtn.onclick = () => {
    window.open("Andrew Chen - Resume.pdf", "_blank");
} 

function a(){
if (document.body.classList.contains("modal-open")) {
    document.body.classList.add("blur");
} else {
    document.body.classList.remove("blur");
}
}
//todo
/** Blur cards on hover. */
// document.querySelectorAll(".card").forEach((card) => {
//     card.onmouseover = () => card.classList.add("blur");
//     card.onmouseleave = () => card.classList.remove("blur");
// });

/** Copy text on click */
document.querySelectorAll(".click-copy").forEach((link) => {
    //todo
});