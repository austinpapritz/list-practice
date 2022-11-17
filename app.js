/* Imports */
import { fetchRanges, fetchLymphocytes, fetchConstellations, fetchRiches } from './fetch-utils.js';
import {
    renderRanges,
    renderLymphocytes,
    renderConstellations,
    renderRiches,
} from './render-utils.js';

/* Get DOM Elements */
const rangesCont = document.querySelector('#ranges-container');
const lymphocytesCont = document.querySelector('#lymphocytes-container');
const constellationsCont = document.querySelector('#constellations-container');
const richesCont = document.querySelector('#riches-container');

/* State */

/* Events */
window.addEventListener('load', async () => {
    await displayRanges();
    await displayLymphocytes();
    await displayConstellations();
    await displayRiches();
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

async function displayRiches() {
    const riches = await fetchRiches();
    for (let family of riches) {
        const familyEl = renderRiches(family);
        richesCont.append(familyEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
