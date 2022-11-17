/* Imports */
import { fetchRanges, fetchLymphocytes } from './fetch-utils.js';
import { renderRanges, renderLymphocytes } from './render-utils.js';
/* Get DOM Elements */
const rangesCont = document.querySelector('#ranges-container');
const lymphocytesCont = document.querySelector('#lymphocytes-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    await displayRanges();
    await displayLymphocytes();
});

/* Display Functions */

async function displayRanges() {
    const ranges = await fetchRanges();
    for (let range of ranges) {
        const rangeEl = renderRanges(range);
        rangesCont.append(rangeEl);
    }
}

async function displayLymphocytes() {
    const lymphocytes = await fetchLymphocytes();
    for (let lymphocyte of lymphocytes) {
        const lymphocyteEl = renderLymphocytes(lymphocyte);
        lymphocytesCont.append(lymphocyteEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
