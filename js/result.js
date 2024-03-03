results = document.URL.split("?")[1].split("&");
let right = parseFloat(results[0].split("=")[1]);
let auth = parseFloat(results[1].split("=")[1]);
let prog = parseFloat(results[2].split("=")[1]);
const freedomIndex = document.getElementById("auth-lib");
const economicIndex = document.getElementById("left-right");
const personalIndex = document.getElementById("conservative-progressive");
const textContainer = document.getElementsByClassName("info-in-text")[0];

right = right / 14.0 * 50 + 50;  console.log("right: " + right); // right.toFixed(2) to reduce the amount of numbers
auth = auth / 15.0 * 50 + 50; console.log("auth: " + auth);
prog = prog / 16.0 * 50.0 + 50; console.log("prog: " + prog);

right = right.toFixed(1);
auth = auth.toFixed(1);
prog = prog.toFixed(1);

const lib = (100 - auth).toFixed(1);
const left = (100 - right).toFixed(1);
const cons = (100 - prog).toFixed(1);

const displayResultsInText = () => {
    let currentlyEditing = textContainer.firstElementChild;
    currentlyEditing.innerText = `%${auth} Authoritarian, %${lib} Libertarian`;
    currentlyEditing = currentlyEditing.nextElementSibling;
    currentlyEditing.innerText =  `%${left} Economic-Left, %${right} Economic-Right`;
    currentlyEditing = currentlyEditing.nextElementSibling;
    currentlyEditing.innerText = `%${cons} Conservative,%${prog} Progressive`;

}

const displayResults = () => {
    const authBar = freedomIndex.firstElementChild;
    const libBar = authBar.nextElementSibling;
    const leftBar = economicIndex.firstElementChild;
    const rightBar = leftBar.nextElementSibling;
    const conservativeBar = personalIndex.firstElementChild;
    const progressiveBar = conservativeBar.nextElementSibling;




    authBar.setAttribute("style", `width:${auth}%`);
    authBar.firstElementChild.innerHTML = `<strong class="d-none d-md-inline">%${auth} Authoritarian</strong>`;
    libBar.setAttribute("style", `width: ${(lib)}%`);
    libBar.firstElementChild.innerHTML = `<strong class="d-none d-md-inline">%${lib} Libertarian</strong>`;

    leftBar.setAttribute("style", `width:${left}%`);
    leftBar.firstElementChild.innerHTML = `<strong class="d-none d-md-inline">%${left} Left</strong>`;
    rightBar.setAttribute("style", `width: ${right}%`);
    rightBar.firstElementChild.innerHTML = `<strong class="d-none d-md-inline">%${right} Right</strong>`;

    conservativeBar.setAttribute("style", `width:${cons}%`);
    conservativeBar.firstElementChild.innerHTML = `<strong class="d-none d-md-inline">%${cons} Conservative</strong>`;
    progressiveBar.setAttribute("style", `width: ${prog}%`);
    progressiveBar.firstElementChild.innerHTML = `<strong class="d-none d-md-inline">%${prog} Progressive</strong>`;

    displayResultsInText();
}

displayResults();


