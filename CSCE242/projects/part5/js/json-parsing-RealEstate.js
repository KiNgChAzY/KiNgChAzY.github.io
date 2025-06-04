//https://kingchazy.github.io/CSCE242/projects/part5/js/json.js

// This file fetches and displays real estate listings from JSON
// The data is displayed on the portfolio.html page in the listings section
// Each listing shows property details including title, price, features, and an image

// URL to the JSON file on GitHub
const Url = "https://kingchazy.github.io/CSCE242/projects/part5/js/listings.json";

const getListings = async() => {
    try {
        const response = await fetch(jsonUrl);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showListings = async() => {
    const properties = await getListings();
    const listingsGrid = document.querySelector("#the-listings");

    properties.forEach((property) => {
        const article = document.createElement("article");
        article.className = "news-article";
        listingsGrid.append(article);

        const imageDiv = document.createElement("div");
        imageDiv.className = "article-image";
        const img = document.createElement("img");
        img.src = property.img_name;
        img.alt = property.title;
        imageDiv.append(img);
        article.append(imageDiv);

        const contentDiv = document.createElement("div");
        contentDiv.className = "article-content";
        article.append(contentDiv);

        const mDiv = document.createElement("div");
        mDiv.className = "article-meta";
        const category = document.createElement("span");
        category.className = "category";
        category.innerHTML = property.property_type;
        const price = document.createElement("span");
        price.className = "price";
        price.innerHTML = property.price;
        mDiv.append(category, price);
        contentDiv.append(mDiv);

        const h2 = document.createElement("h2");
        h2.innerHTML = property.title;
        contentDiv.append(h2);

        const p = document.createElement("p");
        p.innerHTML = property.description;
        contentDiv.append(p);
s
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "property-details";
        
        const addressP = document.createElement("p");
        addressP.innerHTML = `<strong>Address:</strong> ${property.address}`;
        detailsDiv.append(addressP);

        const roomsP = document.createElement("p");
        roomsP.innerHTML = `<strong>Bedrooms:</strong> ${property.bedrooms} | <strong>Bathrooms:</strong> ${property.bathrooms}`;
        detailsDiv.append(roomsP);

        const sqftP = document.createElement("p");
        sqftP.innerHTML = `<strong>Square Feet:</strong> ${property.square_feet}`;
        detailsDiv.append(sqftP);

        const yearP = document.createElement("p");
        yearP.innerHTML = `<strong>Year Built:</strong> ${property.year_built}`;
        detailsDiv.append(yearP);

        const featuresP = document.createElement("p");
        featuresP.innerHTML = `<strong>Features:</strong> ${property.features.join(", ")}`;
        detailsDiv.append(featuresP);

        contentDiv.append(detailsDiv);

        const readMore = document.createElement("a");
        readMore.href = "#";
        readMore.className = "read-more";
        readMore.innerHTML = "View Details";
        contentDiv.append(readMore);
    });
};

showListings();