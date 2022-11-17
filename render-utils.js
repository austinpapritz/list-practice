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

export function renderLymphocytes(lymphocyte) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');

    const nameEl = document.createElement('h2');
    nameEl.textContent = lymphocyte.name;

    const functionEl = document.createElement('p');
    functionEl.textContent = lymphocyte.function;

    const latinEl = document.createElement('p');
    latinEl.textContent = lymphocyte.latin;

    const subclassesEl = document.createElement('ul');
    for (let subclass of lymphocyte.subclasses) {
        const subclassEl = document.createElement('li');
        subclassEl.textContent = subclass;
        subclassesEl.append(subclassEl);
    }

    cardEl.append(nameEl, functionEl, latinEl, subclassesEl);
    return cardEl;
}

export function renderConstellations(constellation) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');

    const nameEl = document.createElement('h2');
    nameEl.textContent = constellation.name;

    const brightestEl = document.createElement('p');
    brightestEl.textContent = constellation.brightest;

    const meaningEl = document.createElement('p');
    meaningEl.textContent = constellation.meaning;

    const starsEl = document.createElement('ul');
    for (let star of constellation.stars) {
        const starEl = document.createElement('li');
        starEl.textContent = star;
        starsEl.append(starEl);
    }

    cardEl.append(nameEl, brightestEl, meaningEl, starsEl);
    return cardEl;
}
