//https://kingchazy.github.io/CSCE242/projects/part5/js/json.js

// This file fetches and displays real estate listings from JSON
// The data is displayed on the portfolio.html page in the listings section
// Each listing shows property details including title, price, features, and an image

// URL to the JSON file on GitHub
const jsonUrl = 'https://kingchazy.github.io/CSCE242/projects/part5/js/listings.json';

// Function to create a property card
function createPropertyCard(property) {
    console.log('Creating card for property:', property.title);
    const article = document.createElement('article');
    article.className = 'news-article';

    article.innerHTML = `
        <div class="article-image">
            <img src="${property.img_name}" alt="${property.title}">
        </div>
        <div class="article-content">
            <div class="article-meta">
                <span class="category">${property.property_type}</span>
                <span class="price">${property.price}</span>
            </div>
            <h2>${property.title}</h2>
            <p>${property.description}</p>
            <div class="property-details">
                <p><strong>Address:</strong> ${property.address}</p>
                <p><strong>Bedrooms:</strong> ${property.bedrooms} | <strong>Bathrooms:</strong> ${property.bathrooms}</p>
                <p><strong>Square Feet:</strong> ${property.square_feet}</p>
                <p><strong>Year Built:</strong> ${property.year_built}</p>
                <p><strong>Features:</strong> ${property.features.join(', ')}</p>
            </div>
            <a href="#" class="read-more">View Details</a>
        </div>
    `;

    return article;
}

// Function to display properties
async function displayProperties() {
    console.log('Starting to fetch properties...');
    try {
        const response = await fetch(jsonUrl);
        console.log('Fetch response:', response);

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }

        const properties = await response.json();
        console.log('Fetched properties:', properties);

        const listingsGrid = document.querySelector('#the-listings');
        console.log('Found listings grid:', listingsGrid);

        if (listingsGrid) {
            // Clear existing content
            listingsGrid.innerHTML = '';

            // Add each property to the grid
            properties.forEach(property => {
                const propertyCard = createPropertyCard(property);
                listingsGrid.appendChild(propertyCard);
            });
            console.log('Finished adding properties to grid');
        } else {
            console.error('Could not find listings grid element');
        }
    } catch (error) {
        console.error('Error fetching or displaying properties:', error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, calling displayProperties...');
    displayProperties();
});