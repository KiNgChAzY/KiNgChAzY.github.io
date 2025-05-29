
const drawBtn = document.getElementById("draw-btn");
const housesContainer = document.getElementById("houses-container");
let drawInterval;
drawBtn.onclick = () => {
    housesContainer.innerHTML = "";
    clearInterval(drawInterval);
    let houseCount = 0;
    drawInterval = setInterval(() => {/*https://ilus.ai/generate*/
        if (houseCount < 6) {
            const house = document.createElement("div");
            house.className = "house";
            house.innerHTML = `<div class="house-roof"></div>
            <div class="house-body"></div>`;
            housesContainer.appendChild(house);
            houseCount++;
        } else {
            clearInterval(drawInterval);
            exerciseSection.style.display = "flex";
        }
    }, 300);
};
const exerciseSection = document.getElementById("exercise-section");
const stickImgs = document.querySelectorAll(".stick-img");
const exerciseBtn = document.getElementById("exercise-btn");
let exerciseInterval;
exerciseBtn.onclick = () => {
    clearInterval(exerciseInterval);
    exerciseInterval = setInterval(() => {
        let current = document.querySelector("#stick-figure img:not(.hidden)");
        let next = current.nextElementSibling;
        if (next == null) {
            next = document.querySelector("#stick-figure img:first-child");
        }
        current.classList.add("hidden");
        next.classList.remove("hidden");
        
    }, 777);
};
