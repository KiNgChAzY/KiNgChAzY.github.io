//https://kingchazy.github.io/CSCE242/projects/part5/js/json.js

// This file fetches and displays real estate listings from JSON
// The data is displayed on the portfolio.html page in the portfolio-grid section
// Each listing shows property details including title, price, features, and an image

// URL to the JSON file on GitHub
const jsonUrl = 'https://kingchazy.github.io/CSCE242/projects/part5/js/listings.json';

// Function to create a property card
function createPropertyCard(property) {
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
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const properties = await response.json();
        const portfolioGrid = document.querySelector('.portfolio-grid');
        
        if (portfolioGrid) {
            // Clear existing content
            portfolioGrid.innerHTML = '';
            
            // Add each property to the grid
            properties.forEach(property => {
                const propertyCard = createPropertyCard(property);
                portfolioGrid.appendChild(propertyCard);
            });
        }
    } catch (error) {
        console.error('Error fetching or displaying properties:', error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', displayProperties);