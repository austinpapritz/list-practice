export function renderRanges(mountain) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');

    const nameEl = document.createElement('h2');
    nameEl.textContent = mountain.name;

    const locationEl = document.createElement('p');
    locationEl.textContent = mountain.location;

    const elevationEl = document.createElement('p');
    elevationEl.textContent = mountain.elevation;

    const peaksEl = document.createElement('ul');
    const peaks = mountain.peaks;
    // console.log(peaks, 'peaks');
    for (let peak of mountain.peaks) {
        console.log(peak, 'peak');
        const peakEl = document.createElement('li');
        peakEl.textContent = peak;
        peaksEl.append(peakEl);
    }
    peaksEl.textContent = mountain.peaks;
}
