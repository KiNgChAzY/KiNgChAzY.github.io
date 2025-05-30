class ImageItem {
    constructor(title, imageUrl) {
        this.title = title;
        this.imageUrl = imageUrl;
    }

    getItem() {
        const container = document.createElement("div");
        container.classList.add("image-container");

        const img = document.createElement("img");
        imgSRC = this.imageUrl;
        imgALT = this.title;

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.textContent = this.title;

        container.appendChild(img);
        container.appendChild(overlay);

        img.onclick = () => {
            const modalImage = document.getElementById("modal-image");
            const modalTitle = document.getElementById("modal-title");
            const modal = document.getElementById("modal");

            modalImage.src = this.imageUrl;
            modalImage.alt = this.title;
            modalTitle.textContent = this.title;
            modal.classList.remove("hidden");
        };

        return container;
    }
}
const imageItems = [//Took out a zip because I couldn't make it work in time
    new ImageItem("It's Raining", "images/rain.jpg"),
    new ImageItem("Work at Home", "images/work.jpg"),
    new ImageItem("Party Time", "images/birthday.jpg"),
    new ImageItem("Musician", "images/clown.jpg"),
    new ImageItem("Gardener", "images/shovel.jpg"),
    new ImageItem("Student", "images/read.jpg")
];

const gallery = document.getElementById("image-gallery");
imageItems.forEach(item => {
    gallery.appendChild(item.getItem());
});
const closeButton = document.getElementById("close");
closeButton.onclick = () => {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");
};
