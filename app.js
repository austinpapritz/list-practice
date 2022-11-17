/* Imports */
import { fetchMountains } from './fetch-utils.js';
import { renderMountains } from './render-utils.js';
/* Get DOM Elements */
const mountainsCont = document.querySelector('#mountains-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const mountains = await fetchMountains();
    console.log(mountains.data, 'mountainsAPP');
    for (let mountain of mountains) {
        const mountainEl = renderMountains(mountain);
        mountainsCont.append(mountainEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
