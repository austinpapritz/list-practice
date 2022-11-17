export function renderRanges(range) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');

    const nameEl = document.createElement('h2');
    nameEl.textContent = range.name;

    const locationEl = document.createElement('p');
    locationEl.textContent = range.location;

    const elevationEl = document.createElement('p');
    elevationEl.textContent = range.elevation;

    const peaksEl = document.createElement('ul');
    for (let peak of range.peaks) {
        const peakEl = document.createElement('li');
        peakEl.textContent = peak;
        peaksEl.append(peakEl);
    }

    cardEl.append(nameEl, locationEl, elevationEl, peaksEl);
    return cardEl;
}
