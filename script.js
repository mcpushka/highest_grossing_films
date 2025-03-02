let filmsData = []; // Global variable to store film data

// Load data from the JSON file
fetch('filmss.json') // Fetch the JSON file (ensure the filename matches the one created by the Python script)
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        filmsData = data; // Store the data in the global variable
        displayFilms(filmsData); // Display all films
    })
    .catch(error => console.error('Error loading data:', error)); // Handle errors

// Function to display films in the table
function displayFilms(films) {
    const tbody = document.querySelector('#films-table tbody'); // Get the table body element
    tbody.innerHTML = ''; // Clear the table before adding new data

    // Loop through each film and create a table row
    films.forEach(film => {
        const row = document.createElement('tr'); // Create a new table row
        row.innerHTML = `
            <td>${film.title}</td> <!-- Film title -->
            <td>${film.release_year}</td> <!-- Release year -->
            <td>${film.director}</td> <!-- Director -->
            <td>$${film.box_office.toLocaleString()}</td> <!-- Box office revenue (formatted with commas) -->
            <td>${film.country}</td> <!-- Country -->
        `;
        tbody.appendChild(row); // Add the row to the table
    });
}

// Function to filter films by release year
function filterFilms() {
    const yearFilter = document.getElementById('year-filter').value; // Get the year from the input field
    if (yearFilter) {
        // Filter films by the selected year
        const filteredFilms = filmsData.filter(film => film.release_year == yearFilter);
        displayFilms(filteredFilms); // Display the filtered films
    } else {
        alert('Please enter a year to filter.'); // Show an alert if no year is entered
    }
}

// Function to reset the filters and show all films
function resetFilters() {
    document.getElementById('year-filter').value = ''; // Clear the input field
    displayFilms(filmsData); // Display all films
}
