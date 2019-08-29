/*
 * Couldn't you just read the readme from the repository? No? Fine.
 * v1.0.2
 */

// TODO: convert to marked https://github.com/markedjs/marked

// things
const qHandler = new URLSearchParams(window.location.search);
// containers
const contentContainer = document.getElementById("contentContainer");
const iframeContainer = document.getElementById("iframeContainer");
// individual elements
const gitLink = document.getElementById("gitLink");
const gitLinkText = document.getElementById("gitLinkText");
const pageName = document.getElementById("name");
//const iframe = document.getElementById("iframeContent");

//query string things
const qRepo = qHandler.get("repo");
let qName = qHandler.get("name");

const repoUrl = "https://www.github.com/codemicro/" + qRepo;
const readMeUrl = "https://raw.githubusercontent.com/codemicro/" + qRepo + "/master/README.md";
const gitButtonLabel = `View codemicro/${qRepo} on Github`;


let isIframeCurrentState = false;
function showiFrame() {
    if (isIframeCurrentState) {
        contentContainer.style.display = "block";
        iframeContainer.style.display = "none";
        gitLinkText.innerHTML = "View on GitHub ";
        isIframeCurrentState = false;
    } else if (!isIframeCurrentState){
        contentContainer.style.display = "none";
        iframeContainer.style.display = "block";
        gitLinkText.innerHTML = "Back to normal view";
        isIframeCurrentState = true;
    }
}


gitLink.title = gitButtonLabel;
gitLink.addEventListener("click", showiFrame);

if (qName == null) {
    console.warn("No name was specified - defaulting to the repo name");
        qName = qRepo;
}

if (qRepo == null) {
    console.error("No repository was provided.");
    contentContainer.innerHTML = "No repository has been specified in the query string.";
    document.title = "No repo specified : tdpain.net";
    qName = "";
} else {
    $.get(readMeUrl, function ( data ) {
        contentContainer.innerHTML = marked(data);
        pageName.innerHTML = qName;
        document.getElementById("viewLink").href = repoUrl;
        document.getElementById("releasesLink").href = repoUrl + "/releases";
        document.getElementById("watchLink").href = repoUrl + "/subscription";
        gitLink.style.display = "block";
    }).fail(function ( error ){
        document.title = "Repo unavailable : tdpain.net";
        contentContainer.innerHTML = `Could not reach the the specified repository's README.md.<br>The remote server returned an error <strong>${error.status}</strong>.`;
    })
}
