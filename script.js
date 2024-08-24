// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createPromise(promiseNumber) {
    return new Promise((resolve) => {
        const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
        setTimeout(() => {
            resolve({ promiseNumber, time });
        }, time * 1000);
    });
}

// Create 3 promises
const promises = [
    createPromise(1),
    createPromise(2),
    createPromise(3)
];

const startTime = Date.now();

// Wait for all promises to resolve
Promise.all(promises).then(results => {
    // Calculate total time taken
    const totalTime = ((Date.now() - startTime) / 1000).toFixed(3);

    // Remove loading row
    document.getElementById('loadingRow').remove();

    // Populate the table with the results
    results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>Promise ${result.promiseNumber}</td><td>${result.time}</td>`;
        document.getElementById('promiseTable').appendChild(row);
    });

    // Add the total row
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    document.getElementById('promiseTable').appendChild(totalRow);
});
