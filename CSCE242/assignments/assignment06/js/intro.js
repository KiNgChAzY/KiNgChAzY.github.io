document.addEventListener("DOMContentLoaded", () => {/*JavaScript HTML DOM EventListener*/
    /* Menu */
    const menuToggle = document.querySelector(".menu-toggle");
    const menuItems = document.querySelector(".menu-items");
    const ex1 = document.getElementById("ex-1");
    const ex2 = document.getElementById("ex-2");
    const nav1 = document.querySelector(".menu-items li:nth-child(1)");
    const nav2 = document.querySelector(".menu-items li:nth-child(3)");

    menuItems.style.display = "none";
    menuToggle.onclick = () => {
        if (menuItems.style.display === "none") {
            menuItems.style.display = "block";
        } else {
            menuItems.style.display = "none";
        }
    };

    nav1.onclick = () => {
        ex1.style.display = "";
        ex2.style.display = "none";
        menuItems.style.display = "none";
    };
    nav2.onclick = () => {
        ex1.style.display = "none";
        ex2.style.display = "";
        menuItems.style.display = "none";
    };
    ex1.style.display = "";
    ex2.style.display = "none";

    /* Speeds */ /*w3 UTF-8 Arrows*/
    const bike = document.getElementById("bike");
    const bikeArea = document.getElementById("bikeArea");
    const speedRange = document.getElementById("speedRange");
    const goBtn = document.getElementById("goBtn");
    const stopBtn = document.getElementById("stopBtn");
    let bikeInterval = null;

    goBtn.onclick = () => {/*W3Schools: JavaScript HTML Animations*/
        clearInterval(bikeInterval);
        let pos = 0;
        bike.style.left = pos + "px";
        bikeInterval = setInterval(() => {
            const speed = Number(speedRange.value);
            pos += speed;
            if (pos > bikeArea.offsetWidth - 70) pos = 0;
            bike.style.left = pos + "px";
        }, 30);
    };
    stopBtn.onclick = () => {
        clearInterval(bikeInterval);
    };

    /* CSS Art Exercise */
    const artArea = document.getElementById("artArea");
    const btnMoon = document.querySelector(".art-btn:nth-child(2)");
    const btnStar = document.querySelector(".art-btn:nth-child(3)");
    const btnCloud = document.querySelector(".art-btn:nth-child(4)");

    btnMoon.onclick = () => {
        artArea.innerHTML = '<img src="images/moon.jpg">';
    };
    btnStar.onclick = () => {
        artArea.innerHTML = '<img src="images/star.jpg">';
    };
    btnCloud.onclick = () => {
        artArea.innerHTML = '<img src="images/cloud.jpg">';
    };
});
