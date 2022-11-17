/* Imports */
import { fetchRanges } from './fetch-utils.js';
import { renderRanges } from './render-utils.js';
/* Get DOM Elements */
const rangesCont = document.querySelector('#ranges-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const ranges = await fetchRanges();
    for (let range of ranges) {
        const rangeEl = renderRanges(range);
        rangesCont.append(rangeEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
