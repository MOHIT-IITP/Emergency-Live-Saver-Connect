const hospitals = [
    {
        name: "Hospital A",
        address: "patna ",
        phone: "555-123-4567",
        website: "http://www.hospitala.com"
    },
    {
        name: "Hospital B",
        address: "ram nagari",
        phone: "555-987-6543",
        website: "http://www.hospitalb.com"
    },
    // Add more hospitals as needed
];

function displayHospitalsByLocation(searchLocation) {
    const filteredHospitals = hospitals.filter(hospital => {
        return hospital.address.toLowerCase().includes(searchLocation.toLowerCase());
    });

    const hospitalContainer = document.getElementById("hospital-container");
    hospitalContainer.innerHTML = ""; // Clear previous results

    filteredHospitals.forEach(hospital => {
        const hospitalDiv = document.createElement("div");
        hospitalDiv.classList.add("hospital");
        hospitalDiv.innerHTML = `
            <h2 class="hospital-name">${hospital.name}</h2>
            <p class="hospital-address">${hospital.address}</p>
            <p class="hospital-phone">${hospital.phone}</p>
            <p class="hospital-website"><a href="${hospital.website}" target="_blank">${hospital.website}</a></p>
        `;
        hospitalContainer.appendChild(hospitalDiv);
    });

    if (filteredHospitals.length === 0) {
        hospitalContainer.innerHTML = "<p>No hospitals found in this location.</p>";
    }
}

// Event listener for location input field
const locationInput = document.getElementById("location");
locationInput.addEventListener("input", function() {
    const searchLocation = this.value.trim();
    if (searchLocation.length > 0) {
        displayHospitalsByLocation(searchLocation);
    } else {
        // If the input field is empty, display all hospitals
        displayHospitals();
    }
});



// Call the function to display hospitals when the page loads
window.onload = displayHospitalsByLocation;
