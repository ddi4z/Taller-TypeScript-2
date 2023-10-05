import { series } from './data.js';
const table = document.querySelector('.table tbody');
if (table) {
    series.forEach((serie) => {
        var _a;
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td class="show-card">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        (_a = row.querySelector('.show-card')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            const card = document.querySelector('#details');
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
            }
        });
        table.appendChild(row);
    });
}
else {
    console.error("No se encontró el elemento con la clase 'table'");
}
const summary = document.querySelector('p');
if (summary) {
    let avgSeasons = 0;
    series.forEach((serie) => {
        avgSeasons += serie.seasons / series.length;
    });
    summary.innerHTML = `Seasons average: ${avgSeasons}`;
}
else {
    console.error("No se encontró el elemento con la etiqueta 'p'");
}
