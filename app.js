/* Imports */
import { fetchRanges } from './fetch-utils.js';
import { renderRanges } from './render-utils.js';
/* Get DOM Elements */
const mountainsCont = document.querySelector('#ranges-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const ranges = await fetchRanges();
    for (let range of ranges) {
        const rangeEl = renderRanges(range);
        mountainsCont.append(rangeEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
