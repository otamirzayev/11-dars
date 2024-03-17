const btn = document.getElementById('btn')
const body = document.querySelector(".container")
const template = document.querySelector('template');

function updateUI(pokeInfo) {


        const cardTemplate = template.content.cloneNode(true);
        const nameElement = cardTemplate.querySelector('.name');
        const hpElement = cardTemplate.querySelector('.hero__hp');
        const attackElement = cardTemplate.querySelector('#attack');
        const defenseElement = cardTemplate.querySelector('#defense');
        const speedElement = cardTemplate.querySelector('#speed');
        const imageElement = cardTemplate.querySelector('.hero img');
        nameElement.textContent = pokeInfo.name;
        hpElement.textContent = `hp ${pokeInfo.stats[0].base_stat}`;
        attackElement.textContent = pokeInfo.stats[1].base_stat;
        defenseElement.textContent = pokeInfo.stats[2].base_stat;
        speedElement.textContent = pokeInfo.stats[5].base_stat;
        imageElement.src = pokeInfo.sprites.front_default;


        body.appendChild(cardTemplate);

}
let h = 0;
btn.addEventListener(('click'), () => {
    h++
    const ranNum = Math.floor(Math.random() * 1000)
    const api = "https://pokeapi.co/api/v2/pokemon/" + ranNum
    console.log(api);

    fetch(api)
        .then((data) => data.json())
        .then((data) => updateUI(data))
        .catch((error) => console.log(Error))
})

