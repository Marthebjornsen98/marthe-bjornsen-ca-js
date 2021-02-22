async function getPokemon() {
    try {
        const response = await fetch('https://api.pokemontcg.io/v2/cards');
        const jsonObject = await response.json();
        const pokemonResults = jsonObject.data;

        console.log(pokemonResults);

        for (let i = 0; i < pokemonResults.length; i++) {
            if (i === 20) {
                break;
            };

            // document.querySelector('.details__container').innerHTML += `
            // <div class="details">
            //     <h2>${pokemonResults[i].name}</h2>
            // </div>
            // `
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