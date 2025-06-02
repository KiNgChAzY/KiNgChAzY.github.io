//https://www.openbrewerydb.org/documentation

const getBreweries = async() => {
    const url = "https://api.openbrewerydb.org/v1/breweries";


    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};


const showBreweries = async() => {
    const breweries = await getBreweries();
    const breweriesDiv = document.getElementById("breweries");

    breweries.forEach((brewery) => {
        const brewerySection = document.createElement("section");
        breweriesDiv.append(breweriesSection);

        //make the h3
        const h3 = document.createElement("h3");
        h3.innerHTML = brewery.name;
        brewerySection.append(h3);

        //make the brand paragraph
        const p = document.createElement("p");
        p.innerHTML = `id: ${brewery.id}`;
        brewerySection.append(p);


        const p2 = document.createElement("p");
        p.innerHTML = `brewery type: ${brewery.brewery_type}`;
        brewerySection.append(p);

        //make the reviews list
        const ul = document.createElement("ul");
        brewerySection.append(ul);

        shoe.reviews.forEach((review) => {
            const li = document.createElement("li");
            li.innerHTML = review;
            ul.append(li);
        });

    });
};

showBreweries();