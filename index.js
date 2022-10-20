const carrousel = document.getElementById("carrouselAnimales");

fetch("animales.json").then(response => response.json()).then(animales => {
    animales.forEach(animal => {
        const divAnimal = document.createElement('div');
        divAnimal.innerHTML =

            `
        <div class="card mb-3">
            <img src=" ${animal.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${animal.nombre}</h5>
                <p class="card-text">Es un ${animal.tipo} ${animal.raza}, tiene ${animal.edad_aprox} de edad, es de tamaño ${animal.tamano} y posee un pelaje ${animal.pelaje}</p>
                <p class="card-text"> Sus actividades favoritas son: ${animal.actividades}</p>
                <p class="card-text"> ${animal.nombre} es ${animal.cualidades} y de carácter ${animal.caracter}</p>
            </div>
        </div>
        `
        carrousel.appendChild(divAnimal);
    });
    $('.carrousel').slick({
    });

})
