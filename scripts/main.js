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
    }, 50)
}

const mainElement = document.querySelector("main");

/**
 * Adds background blur when modal is shown. This blur is removed when closed.
 */
function addBackgroundBlur() {
    mainElement.style.filter = "blur(2px)";
    // Callback removes background blur on click of the opened modal.
    callWhenLoaded(".modal.show", backdrop => {
        backdrop.onclick = () => { mainElement.style.filter = "none" };
    });
}

document.querySelectorAll("#projects .card").forEach((projectBtn) => {
    projectBtn.onclick = addBackgroundBlur;
});

if (window.location.hash === "#projects") {
    location.hash = "#" + hash;
}
