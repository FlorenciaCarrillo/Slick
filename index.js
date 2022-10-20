const carrousel = document.getElementById("carrouselAnimales");

fetch("animales.json").then(response => response.json()).then(animales => {
    animales.forEach(animal => {
        const divAnimal = document.createElement('div');
        divAnimal.innerHTML = `
        <h1> ${animal.nombre} </h1>
        `;
        carrousel.appendChild(divAnimal);
    });
    $('.carrousel').slick({
    });

})
