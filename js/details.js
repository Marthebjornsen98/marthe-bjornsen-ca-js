const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getPokemonId(id) {
    try {
        document.querySelector('.loading').innerHTML = `
        <img src="https://cdn.dribbble.com/users/341887/screenshots/4595077/arizdesign.gif"/>
        `;

        const response = await fetch('https://api.pokemontcg.io/v2/cards/' + id);
        const jsonObject = await response.json();
        const pokemonIdResults = jsonObject.data;
        const pokemonAbilities = jsonObject.data.attacks;

        document.title = pokemonIdResults.name;

        document.querySelector('.details__container').innerHTML += `
            <div class="id__img--container">
                <img class="id__img" src="${pokemonIdResults.images.small}" />
            </div>
            <div class="details__information">
                <div class="detail__card">
                    <div class="detail__card--text">
                        <h2>Name</h2>
                        <h3 class="pokemon__value">${pokemonIdResults.name}</h3>
                    </div>
                    <span class="line"></span>

                    <div class="detail__card--text">
                        <h2>HP</h2>
                        <h3 class="pokemon__value">${pokemonIdResults.hp}</h3>
                    </div>
                    <span class="line"></span>

                    <div class="detail__card--text">
                        <h2>Artist</h2>
                        <h3 class="pokemon__value">${pokemonIdResults.artist}</h3>
                    </div>
                    <span class="line"></span>

                    <div class="detail__card--text">
                        <h2>Rarity</h2>
                        <h3 class="pokemon__value">${pokemonIdResults.rarity}</h3>
                    </div>
                </div>
            </div>
        `;

        pokemonAbilities.forEach(value => {
            document.querySelector('.details__information').innerHTML += `
            <div class="abilities__container">
                <h2>${value.name}</h2>
                <p>${value.text}</p>
                <p>${value.damage}</p>
            </div>
            `
        });

    } catch (error) {
        document.querySelector('.alert') = showAlert(
            'An error occured, please contact Noroff.no',
            'danger'
        );

        console.log(error);

    } finally {
        setTimeout(function () {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);

        document.querySelector('.loading').innerHTML = ``;
    }
}

getPokemonId(id);