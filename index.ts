import { series } from './data.js';

const table: HTMLElement | null = document.querySelector('.table tbody');

if (table) {
    series.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td class="show-card">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        row.querySelector('.show-card')?.addEventListener('click', () => {
            const card: HTMLElement | null = document.querySelector('#details');
            if (card) {
            card.innerHTML = `
            <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="${serie.image}" alt="${serie.name} picture">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.link}" target="_blank">${serie.link}</a>
            </div>
            </div>`;
        }});

        table.appendChild(row);
    });
} else {
    console.error("No se encontró el elemento con la clase 'table'");
}



const summary: HTMLElement | null = document.querySelector('p');

if (summary) {
    let avgSeasons = 0;
    series.forEach((serie) => {
        avgSeasons += serie.seasons/series.length;
    });
    summary.innerHTML = `Seasons average: ${avgSeasons}`;
} else {
    console.error("No se encontró el elemento con la etiqueta 'p'");
}