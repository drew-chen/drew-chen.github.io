let resumeBtn = document.getElementById("btn-resume");
resumeBtn.onclick = () => {
    window.open("Andrew Chen - Resume.pdf", "_blank");
} 

/**
 * Waits until an element is loaded before calling a function on that element.
 * @param {string} query The selector of the element.
 * @param {*} callBack A single function to be called upon element loading.
 */
function callWhenLoaded(query, callBack){
    window.setTimeout(function(){
      let element = document.querySelector(query);
      if (element) {
        callBack(element);
      } else {
        callWhenLoaded(query);
      }
    }, 500)
}

let main = document.querySelector("main");

function openModal () {
    main.style.filter = "blur(2px)";
    callWhenLoaded(".modal.show", backDrop => {
        backDrop.onclick = () => {main.style.filter = "none"};
    });
}

document.querySelectorAll("#projects .card").forEach((projectBtn) => {
    projectBtn.onclick = openModal;
});



/** Copy text on click */
// document.querySelectorAll(".click-copy").forEach((link) => {
//     //todo
// });