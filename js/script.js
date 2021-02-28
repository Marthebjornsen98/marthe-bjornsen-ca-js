async function getPokemon() {
    try {
        document.querySelector('.loading').innerHTML = `
        <img src="https://cdn.dribbble.com/users/341887/screenshots/4595077/arizdesign.gif"/>
        `;

        const response = await fetch('https://api.pokemontcg.io/v2/cards');
        const jsonObject = await response.json();
        const pokemonResults = jsonObject.data;

        for (let i = 0; i < pokemonResults.length; i++) {
            if (i === 20) {
                break;
            };

            document.querySelector('.card__container').innerHTML += `
            <div class="cards">
                <h2 class="card__header" >${pokemonResults[i].name}</h2>
                <p class="pokemon__type">${pokemonResults[i].types}</p>
                <img class="card__image" src="${pokemonResults[i].images.small}">
                <div class="read-more__cta">
                    <a class="read-more" href="details.html?id=${pokemonResults[i].id}">Read More</a>
                </div>
            </div>
            `
        };

    } catch (error) {
        document.querySelector('.alert').innerHTML = showAlert(
            'An error occured, please contact Noroff.no',
            'danger'
        );
        console.log(error);

    } finally {
        setTimeout(function () {
            document.querySelector('.alert').innerHTML = ``;
        }, 3000);

        document.querySelector('.loading').innerHTML = ``;
    };
};

getPokemon();