class Hamburger {
    constructor(name, imageUrl, meat, toppings, bun, sides) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.meat = meat;
        this.toppings = toppings;
        this.bun = bun;
        this.sides = sides;
    }

    get item() {
        const itemSection = document.createElement("section");
        itemSection.classList.add("gallery-item");

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("item-image");

        const image = document.createElement("img");
        image.src = this.imageUrl;
        image.alt = this.name;
        imageContainer.appendChild(image);

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.textContent = this.name;
        imageContainer.appendChild(overlay);

        itemSection.appendChild(imageContainer);

        image.onclick = () => {
            document.getElementById('itemModal').style.display = 'block';
            document.getElementById('modal-image').src = this.imageUrl;
            document.getElementById('modal-image').alt = this.name;
            
            const modalTextContent = document.getElementById('modal-text');
            modalTextContent.innerHTML = '';
            
            const h3 = document.createElement("h3");
            h3.textContent = this.name;
            modalTextContent.appendChild(h3);
            
            modalTextContent.appendChild(this.paragraph("Meat", this.meat));
            modalTextContent.appendChild(this.paragraph("Bun", this.bun));
            modalTextContent.appendChild(this.paragraph("Sides", this.sides.join(', ')));
            modalTextContent.appendChild(this.paragraph("Toppings", this.toppings.join(', ')));
        };

        return itemSection;
    }

    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

const hamburgers = [
    new Hamburger('Classic Cheeseburger', 'images/cheese.jpg', 'Beef Patty', ['American Cheese'], 'Brioche Bun', ['Fries']),
    new Hamburger('Dog Burger', 'images/dog-burger.jpg', 'Beef Patty', ['Stuffed-Bacon', 'Cheddar Cheese', 'Lettuce'], 'Potato Bun', ['none']),
    new Hamburger('Classic Burger', 'images/one-patties.jpg', 'Beef Patty', ['American Cheese', 'Lettuce', 'Tomato','Caramelized Onions'], 'Sesame Seed Bun', ['Sweet Potato Fries']),
    new Hamburger('Double Patty', 'images/two-patties.jpg', 'Two Beef Patties', ['Provolone Cheese', 'Lettuce', 'Tomato',"Onions", 'Special Sauce'], 'Brioche Bun', ['Fries'])
];

hamburgers.forEach(hamburger => {
    document.getElementById('item').appendChild(hamburger.item);
});

document.querySelector('.close').onclick = () => {
    document.getElementById('itemModal').style.display = 'none';
};