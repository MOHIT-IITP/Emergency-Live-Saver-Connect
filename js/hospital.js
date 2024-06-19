navigator.geolocation.getCurrentPosition(function(position) {
    var userLat = position.coords.latitude;
    var userLon = position.coords.longitude;

    // List of hospitals with their details
    var hospitals = [
        {
            name: "IGIMS (Indra Gandhi Institute of Medical Science)",
            address: "Sheikhpura, Patna , Bihar 800014",
            phone: "Not Available",
            website:"http://www.igims.org/",
            doctors: ["Dr. John Doe", "Dr. Jane Smith"],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8555226887834!2d85.0873588759992!3d25.609716714867357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5793d036c7e9%3A0xf3c735dd4ca2d604!2sIGIMS!5e0!3m2!1sen!2sin!4v1718251341382!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            latitude:25.610433200158507, 
            longitude: 85.08962505997437,
        },
        {
            name: "Hospital B",
            address: "456 Hospital Road, Town",
            doctors: ["Dr. Michael Johnson", "Dr. Sarah Brown"],
            phone: "555-987-6543",
            website: "https://www.google.com",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8555226887834!2d85.0873588759992!3d25.609716714867357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5793d036c7e9%3A0xf3c735dd4ca2d604!2sIGIMS!5e0!3m2!1sen!2sin!4v1718251341382!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            latitude: 25.601234567890123,
            longitude: 85.09891234567890
        },
        {
            name: "Ford Hospital",
            address: "New Bypass, NH-30, Khemnichak, New Jaganpura, PS, Ramkrishan Nagar, Patna, Bihar 800027", 
            doctors: [""],
            phone:"+91 93863 92846",
            website:"https://www.fordhospital.org",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8555226887834!2d85.0873588759992!3d25.609716714867357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5793d036c7e9%3A0xf3c735dd4ca2d604!2sIGIMS!5e0!3m2!1sen!2sin!4v1718251341382!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            latitude : 25.584503820752317, 
            longitude: 85.16307556174921,
        }


    ];

    // Function to calculate distance between two points using Haversine formula
    function calculateDistance(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the Earth in kilometers
        var dLat = (lat2 - lat1) * Math.PI / 180;
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var distance = R * c; // Distance in kilometers
        return distance;
    }

    // Filter hospitals within 10km radius
    var nearbyHospitals = hospitals.filter(function(hospital) {
        var distance = calculateDistance(userLat, userLon, hospital.latitude, hospital.longitude);
        return distance <= 10; // Check if hospital is within 10km radius
    });

// Display nearby hospitals
var hospitalList = document.getElementById("hospitalList");
nearbyHospitals.forEach(function(hospital, index) {
    var listItem = document.createElement("li");
    listItem.innerHTML = `
        <div id="hospital-self" class="hospital hospital-${index}">
            <h2 class="hospital-name">${hospital.name}</h2>
            <p class="hospital-address"><strong>Address:</strong> ${hospital.address}</p>
            <p class="hospital-phone"><strong>Phone:</strong> ${hospital.phone}</p>
            <a class = "hospital-website" href="${hospital.email}"><strong>Go on Hospital Site</strong> </a>
            <p class="hospital-doctors"><strong>Doctors:</strong> ${hospital.doctors.join(", ")}</p>
            <button class="show-map-btn" data-hospital-index="${index}">Show Map</button>
            <div class="hospital-map" style="display: none;">${hospital.map}</div>
        </div>
    `;
    hospitalList.appendChild(listItem);
});

// Add event listeners to show/hide map buttons
var showMapButtons = document.querySelectorAll('.show-map-btn');
showMapButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var hospitalIndex = this.getAttribute('data-hospital-index');
        var hospitalMap = document.querySelector('.hospital-' + hospitalIndex + ' .hospital-map'); hospitalMap.style.display = (hospitalMap.style.display === 'none') ? 'block' : 'none';
    });
});

  
 
}, function(error) {
    // Handle any errors that occur
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
});
