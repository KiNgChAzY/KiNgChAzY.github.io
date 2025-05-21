/* when button clicked write to a paragraph*/

/*
const writeParagraph = () => {
    console.log("Hello, Everyone!");
};

document.getElementById("but-write").onclick = writeParagraph;
*/


document.getElementById("but-write").onclick = (event) => {
    document.getElementById("writep").innerHTML = "You clicked the button";
    event.target.innerHTML = ("done");
};

/*
document.getElementById("but-write").onclick = () => {
    document.getElementById("writep").innerHTML = "You clicked the button";
    document.getElementById("but-write").innerHTML = ("done");
};
*/

document.getElementById("but-start").onclick = (event) => {
    document.getElementById("start-endp").innerHTML = "Starting";
    event.target.innerHTML = ("Started");
};
document.getElementById("but-end").onclick = (event) => {
    document.getElementById("start-endp").innerHTML = "Ended"; /* if += conutues */
    event.target.innerHTML = ("Ended");
};
/*
document.getElementById("txt-name").onkeyup = (event) => {
    console.log(event.target.value);
    event.target.value = ("hello")
};*/

document.getElementById("txt-name").onkeyup = (event) => {
    const username = event.target.value;
    document.getElementById("welcomep").innerHTML = `welcome ${username}!`
};