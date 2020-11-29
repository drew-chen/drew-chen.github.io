/**
 * Waits until an element is loaded before calling a function on that element.
 * @param {string} query The selector of the element.
 * @param {*} callBack A single function to be called upon element loading.
 */
function callWhenLoaded(query, callBack){
    setTimeout(function(){
      let element = document.querySelector(query);
      if (element) {
        callBack(element);
      } else {
        callWhenLoaded(query, callBack);
      }
    }, 100)
}

const mainElement = document.querySelector("main");

/**
 * Adds background blur when modal is shown. This blur is removed when closed.
 * @param {Object} projectBtn The dom object representing the project card button.
 */
function addBackgroundBlur(projectBtn) {
    mainElement.style.filter = "blur(2px)";
    /**
     * Callback removes background blur on click of the opened modal.
     * Furthermore, it removes card focus.
     */
    callWhenLoaded(".modal.show", backdrop => {
        backdrop.addEventListener('click', () => {
            mainElement.style.filter = "none";
            projectBtn.blur();
        });
    });
}

document.querySelectorAll("#projects .card").forEach((projectBtn) => {
    projectBtn.addEventListener('click', 
        addBackgroundBlur.bind(this, projectBtn)
    );
});
