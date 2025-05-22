/* Ice Cream Counter */
let clickCount = 0;
const MAX_LIKES = 20;

document.getElementById("icecream-counter").onclick = (event) => {
    if (clickCount < MAX_LIKES) {
        clickCount++;
        document.getElementById("like-icecreamp").innerHTML = "<strong>I Like Ice Cream</strong><br>".repeat(clickCount);
        document.getElementById("like-icecreamp").classList.remove("hidden");
    } else {
        document.getElementById("like-icecreamp").innerHTML = "<strong>You ran out of likes!</strong>";
    }
};

/* Ice Cream Slider */
document.getElementById("icecream-slider").oninput = (event) => {
    const value = event.target.value;
    document.getElementById("slider-value").innerHTML =
        `<strong>I want ${value} ice creams</strong>`;
};

/* Ice Cream Image */
document.getElementById("show-icecream-btn").onclick = (event) => {
    document.getElementById("icecream-image").style.display = "block";
};