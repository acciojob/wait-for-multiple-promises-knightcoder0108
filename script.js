//your JS code here. If required.
// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createPromise(index) {
    const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ index, time: time.toFixed(3) });
        }, time * 1000);
    });
}

// Create an array of 3 promises
const promises = [
    createPromise(1),
    createPromise(2),
    createPromise(3)
];

// Start timing the total duration
const startTime = performance.now();

// Wait for all promises to resolve
Promise.all(promises).then((results) => {
    // Calculate the total time taken
    const totalTime = (performance.now() - startTime) / 1000;

    // Remove the loading text
    const loadingText = document.getElementById('loadingText');
    loadingText.parentNode.removeChild(loadingText);

    // Get the results table
    const table = document.getElementById('resultsTable');

    // Add a row for each promise
    results.forEach(result => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');

        cell1.textContent = `Promise ${result.index}`;
        cell2.textContent = result.time;

        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    });

    // Add the total time row
    const totalRow = document.createElement('tr');
    const totalCell1 = document.createElement('td');
    const totalCell2 = document.createElement('td');

    totalCell1.textContent = 'Total';
    totalCell2.textContent = totalTime.toFixed(3);

    totalRow.appendChild(totalCell1);
    totalRow.appendChild(totalCell2);
    table.appendChild(totalRow);
});
