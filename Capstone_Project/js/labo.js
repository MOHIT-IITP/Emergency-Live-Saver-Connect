const hospitals = [
    {
        name: "Redcliffe Labs - Collection Center",
        address: "Bailey Rd, Khajpura, Patna, Bihar 800014",
        website: "https://redcliffelabs.com/",
        phone: "07033420424",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.9994055810594!2d85.0743882!3d25.604936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57ff7fa2b52b%3A0xdcb5131ca363addf!2sRedcliffe%20Labs%20-%20Collection%20Center!5e0!3m2!1sen!2sin!4v1718976792997!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Magadh Diagnostic",
        address: "Vidhyapeth Market, Bailey Rd, Raja Bazar, Patna, Bihar 800014",
        website: "",
        phone: "06122295637",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.9994055810594!2d85.0743882!3d25.604936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57bf6e956fa1%3A0xd38a1db14322af3!2sMagadh%20diagnostic!5e0!3m2!1sen!2sin!4v1718992769316!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Dr Lal PathLabs - Patient Service Centre",
        address: "Raja Bazar, Indrapuri, Patna, Bihar 800014",
        website: "https://labs.lalpathlabs.com/",
        phone: "01149885050",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.8902086600274!2d85.07961!3d25.6085643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57a4ffdaf011%3A0xa79b3606300b8c98!2sDr%20Lal%20PathLabs%20-%20Patient%20Service%20Centre!5e0!3m2!1sen!2sin!4v1718992973995!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Redcliffe Labs - Collection Center",
        address: "Jagdeo Path, Raja Bazar, Indrapuri, Patna, Bihar 800014",
        website: "https://redcliffelabs.com/",
        phone: "07969285501",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.9741263161945!2d85.0677542!3d25.605776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5753eb17b9a3%3A0xef83a0b418bbfea9!2sRedcliffe%20Labs%20-%20Collection%20Center!5e0!3m2!1sen!2sin!4v1718993037091!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "General Diagnostic International Pvt Ltd Patna",
        address: "Bailey Rd,Raja Bazar, Rukanpura, Patna, Bihar 800014",
        website: "http://www.gd-lab.com/",
        phone: "",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.9805334792272!2d85.0767611!3d25.6055631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed578aeb8b8f33%3A0x11a2d81fb9ada503!2sGeneral%20Diagnostic%20international%20Pvt%20Ltd%20Patna!5e0!3m2!1sen!2sin!4v1718993351458!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Metropolis Healthcare Ltd - Pathology Lab, Diagnostic Centre In Patna",
        address: "Maurya Path, Khajpura, Patna, Bihar 800014",
        website: "https://www.metropolisindia.com/",
        phone: "09321272713",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.894040111171!2d85.0721079!3d25.608437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57d6768c7961%3A0x5753f9beda507117!2sMetropolis%20Healthcare%20Ltd%20-%20Pathology%20Lab%2C%20Diagnostic%20Centre%20In%20Patna!5e0!3m2!1sen!2sin!4v1718993408118!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "SagePath Labs Private Limited",
        address: "Bailey Rd, Raja Bazar, Patna, Bihar 800014",
        website: "http://www.sagepathlabs.com/",
        phone: "04040125441",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.8746731941913!2d85.0815435!3d25.60509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57b58dd2089b%3A0x83c0f4edd59873d2!2sSagePath%20Labs%20Private%20Limited!5e0!3m2!1sen!2sin!4v1718993442979!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Dr. Lal Pathlabs Ltd, Patna",
        address: " Bailey Rd, Raja Bazar, Patna, Bihar 800014",
        website: "https://www.lalpathlabs.com/",
        phone: "06122295550",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.87513475994874!2d85.0869497!3d25.6048446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed579535384901%3A0x5ec813642dd31112!2sDr.%20Lal%20Pathlabs%20Ltd%2C%20Patna!5e0!3m2!1sen!2sin!4v1718993531677!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Redcliffe Labs - Collection Center",
        address: "Akashwani Rd, Khajpura, Bihar 800014",
        website: "https://redcliffelabs.com/",
        phone: "07969285645",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.87114209847044!2d85.0782456!3d25.6069673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed570f5b284649%3A0x682abbd5e59e8d65!2sRedcliffe%20Labs%20-%20Collection%20Center!5e0!3m2!1sen!2sin!4v1718993939648!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Sharan Pathological Lab",
        address: "Bailey Rd, Sheikhpura, Patna, Bihar 800014",
        website: "https://sharanlab.com/",
        phone: "09934170493",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.875967975382!2d85.088745!3d25.6044016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5799802b1925%3A0x790d38a87b0e101f!2sSharan%20Pathological%20Lab!5e0!3m2!1sen!2sin!4v1718993912589!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Reliable Diagnostic Center Pvt Ltd( RDC HEALTHCARE)",
        address: "Akashwani Marg, Bailey Rd, Patna, Bihar 800014",
        website: "https://www.rdccare.com/",
        phone: "",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.87091073396124!2d85.0786694!3d25.6070903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57f152796027%3A0x215305dec3a66fcc!2sReliable%20Diagnostic%20Center%20Pvt%20Ltd(%20RDC%20HEALTHCARE)!5e0!3m2!1sen!2sin!4v1718993896319!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Green Dot Labs",
        address: "Ashokpuri, Khajpura, Patna, Bihar 800014",
        website: "",
        phone: "08210611055",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.86970574074712!2d85.0779112!3d25.6077309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57775b31e4bd%3A0x8d25cd756866fca4!2sGreen%20Dot%20Labs!5e0!3m2!1sen!2sin!4v1718993880357!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Vimta Patient Service Centre",
        address: " Bailey Rd, Raja Bazar, Indrapuri, Patna, Bihar 800014",
        website: "http://www.vimta.com/",
        phone: "09835609969",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.87466228508927!2d85.0859702!3d25.6050958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57955b0b2005%3A0x57cf166c51ba0e0b!2sVimta%20Patient%20Service%20Centre!5e0!3m2!1sen!2sin!4v1718993863578!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Pathkind Labs",
        address: "Bk College, Akashwani Rd, Khajpura, Patna, Bihar 800014",
        website: "https://nearby.pathkindlabs.com/",
        phone: "09199312863",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.8804167044818!2d85.0820929!3d25.6020362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57dd3aa25f9b%3A0x382717c0a1409141!2sPathkind%20Labs!5e0!3m2!1sen!2sin!4v1718993845559!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Pathkind Labs",
        address: "beside Brahamsthani Gali, Raja Bazar, Phulwari, Patna, Bihar 800014",
        website: "https://nearby.pathkindlabs.com/",
        phone: "07044066534",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.8758229630076!2d85.0851347!3d25.6044787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57cac29ae647%3A0xcf9c394f4deacce9!2sPathkind%20Labs!5e0!3m2!1sen!2sin!4v1718993734119!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "SRL -Super Religare Laboratories",
        address: "Ram Nagri more, Naseeb market, Patna, Bihar 800025",
        website: "https://redcliffelabs.com/",
        phone: "07969285645",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.85696487669645!2d85.0815405!3d25.6145033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57bcc11c6635%3A0x1bd1d9a7fece3712!2sSRL%20-Super%20Religare%20Laboratories!5e0!3m2!1sen!2sin!4v1718993716978!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Redcliffe Labs - Collection Center",
        address: "Akashwani Rd, Khajpura, Bihar 800014",
        website: "",
        phone: "09771477761",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.87114209847044!2d85.0782456!3d25.6069673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed570f5b284649%3A0x682abbd5e59e8d65!2sRedcliffe%20Labs%20-%20Collection%20Center!5e0!3m2!1sen!2sin!4v1718993697675!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Metropolis Healthcare Ltd - Pathology Lab, Diagnostic Centre In Patna",
        address: " Bailey Rd, Sheikhpura, Patna, Bihar 800014",
        website: "https://www.metropolisindia.com/",
        phone: "09321272713",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.872523116124!2d85.0907881!3d25.6062331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5765e35876a1%3A0xdb355e12e9ad8df!2sMetropolis%20Healthcare%20Ltd%20-%20Pathology%20Lab%2C%20Diagnostic%20Centre%20In%20Patna!5e0!3m2!1sen!2sin!4v1718993674860!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "Patient Health Care",
        address: "BABA CHOWK, BUS STAND, Keshri Nagar, Patna, Bihar 800024",
        website: "https://patientshealthcares.com/",
        phone: "08271470513",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.844191700255!2d85.0969649!3d25.6212912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57ce2d98c2cd%3A0xdf0150a35338197e!2sPatient%20Health%20Care!5e0!3m2!1sen!2sin!4v1718993658843!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
        name: "MEDICAL LAB TESTS PATNA",
        address: "Boring Rd, near Gyan Ganga, Sri Krishna Puri, Patna, Bihar 800001",
        website: "http://medicallabtestpatna.com/",
        phone: "06299620825",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.852141552381!2d85.1118801!3d25.6170667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59d0816ae269%3A0xecfbd048a52c24c6!2sMEDICAL%20LAB%20TESTS%20PATNA!5e0!3m2!1sen!2sin!4v1718993644829!5m2!1sen!2sin" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
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
            <button class="show-map-button">Show Map</button>
            <div class="hospital-map" style="display:none;">${hospital.map}</div>
        `;
        hospitalContainer.appendChild(hospitalDiv);

        const showMapButton = hospitalDiv.querySelector(".show-map-button");
        const hospitalMap = hospitalDiv.querySelector(".hospital-map");
        showMapButton.addEventListener("click", function() {
            hospitalMap.style.display = hospitalMap.style.display === "none" ? "block" : "none";
        });
    });

    if (filteredHospitals.length === 0) {
        hospitalContainer.innerHTML = "<p>No hospitals found in this location.</p>";
    }
}

function displayHospitals() {
    const hospitalContainer = document.getElementById("hospital-container");
    hospitalContainer.innerHTML = ""; // Clear previous results

    hospitals.forEach(hospital => {
        const hospitalDiv = document.createElement("div");
        hospitalDiv.classList.add("hospital");
        hospitalDiv.innerHTML = `
            <h2 class="hospital-name">${hospital.name}</h2>
            <p class="hospital-address">${hospital.address}</p>
            <p class="hospital-phone">${hospital.phone}</p>
            <p class="hospital-website"><a href="${hospital.website}" target="_blank">${hospital.website}</a></p>
            <button class="show-map-button">Show Map</button>
            <div class="hospital-map" style="display:none;">${hospital.map}</div>
        `;
        hospitalContainer.appendChild(hospitalDiv);

        const showMapButton = hospitalDiv.querySelector(".show-map-button");
        const hospitalMap = hospitalDiv.querySelector(".hospital-map");
        showMapButton.addEventListener("click", function() {
            hospitalMap.style.display = hospitalMap.style.display === "none" ? "block" : "none";
        });
    });
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

// Call the function to display all hospitals when the page loads
window.onload = displayHospitals;
// 
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
