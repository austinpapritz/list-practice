/* Imports */
import { fetchRanges, fetchLymphocytes, fetchConstellations } from './fetch-utils.js';
import { renderRanges, renderLymphocytes, renderConstellations } from './render-utils.js';
/* Get DOM Elements */
const rangesCont = document.querySelector('#ranges-container');
const lymphocytesCont = document.querySelector('#lymphocytes-container');
const constellationsCont = document.querySelector('#constellations-container');

/* State */

/* Events */
window.addEventListener('load', async () => {
    await displayRanges();
    await displayLymphocytes();
    await displayConstellations();
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

async function displayConstellations() {
    const constellations = await fetchConstellations();
    for (let constellation of constellations) {
        const constellationEl = renderConstellations(constellation);
        constellationsCont.append(constellationEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
