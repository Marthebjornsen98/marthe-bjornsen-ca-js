async function getPokemon() {
    try {
        const response = await fetch('https://api.pokemontcg.io/v2/cards');
        const jsonObject = await response.json();
        const pokemonResults = jsonObject.data;

        console.log(pokemonResults);
        document.querySelector('.title').innerHTML = `
            <h2>Look at all the Pokémon cards here</h2>
        `

        for (let i = 0; i < pokemonResults.length; i++) {
            if (i === 20) {
                break;
            };

            document.querySelector('.card__container').innerHTML += `
            <div class="cards">
                <img class="card__image" src="${pokemonResults[i].images.small}">   
                <h2 class="card__header" >${pokemonResults[i].name}</h2>
                <p>${pokemonResults[i].types}</p>
                    <div class="read-more__cta">
                        <a class="read-more" href="details.html?id=${pokemonResults[i].id}">Read More</a>
                    </div>
            </div>
            `
        };
        console.log(pokemonResults[i]);

    } catch (error) {
        // document.querySelector('.alert') += showAlertTouser(error, 'danger');

    } finally {
        // setTimeout(function () {
        //     document.querySelector('.alert').innerHTML = '';
        // }, 3000);
    };
};

getPokemon();