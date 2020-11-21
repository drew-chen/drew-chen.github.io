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
    /**
     * Callback removes background blur on click of the opened modal.
     * Furthermore, it removes card focus.
     */
    callWhenLoaded(".modal.show", backdrop => {
        backdrop.addEventListener('click', () => {
            mainElement.style.filter = "none"
            document.activeElement.blur()
        });
    });
}

document.querySelectorAll("#projects .card").forEach((projectBtn) => {
    projectBtn.addEventListener('click', addBackgroundBlur);
});

/** 
 * Gets the hash parameter in the url on load. If the parameter matches a project
 * then the website scrolls to the projects section and focuses the matching
 * project.
 */
function focusUrlHashProject () {
    if (!window.location.hash) {
        return
    }
    const hashUrl = window.location.hash.slice(1)
    const projectDescriptionIds = new Set([
        "social-network",
        "relationaldb",
        "sketch",
        "git",
        "this-website",
        "cipher-machine"
    ])
    if (projectDescriptionIds.has(hashUrl)) {
        const projectsSection = document.getElementById("projects")
        projectsSection.scrollIntoView()
        const project = document.getElementById(`${hashUrl}-card`)
        project.focus()
    }

}

// Focus a specific project when the website is loaded, or when the url changes.
focusUrlHashProject()
callWhenLoaded("#projects", () => {
    window.addEventListener("hashchange", focusUrlHashProject)
});

