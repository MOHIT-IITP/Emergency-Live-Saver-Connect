const bloodBanks = [
    {
        name: "Maa Blood Centre",
        address: "Bari Path, Dariyapur Gola, Bakarganj, Patna, Bihar 800004",
        pincode: "800004",
        Phone: 7942685882,
        Map: "https://maps.app.goo.gl/t4SoM1GmwUnZ1HYW6",
    },
    {
        name: "Red Cross Hospital",
        address: "South Gandhi Maidan, Patna ",
        pincode: "800001",
        Phone: 7947137507,
        
    },
    {
        name: "Indian Red Cross Society, Patna City Branch",
        address: "Bihar State Branch, N Gandhi Maidan Rd, Kali Asthan, Patna, Bihar 800001",
        pincode: "800001",
        Phone: 6122234869,
        Map: "https://maps.app.goo.gl/8oHGwuk5DMW1ZCK18",
    },
    {
        name: "Modern Blood Bank",
        address: "Jai Prabha Hospital Campus, Kankarbagh, Patna - 800020",
        pincode: "800020",
        Phone: 7942684181,
        Map: "https://maps.app.goo.gl/epDfp23xdfRt4C6n8",
    },
    {
        name: "Bharat Blood Bank",
        address: "Jhaji Kothi, Kadamkuan, Patna - 800003 (Near Churi Market)",
        pincode: "800003",
        Phone: 7947122047,
        Map: "https://maps.app.goo.gl/NTD8AUKKnKbRm9Tr6",
    },
    {
        name: "Model Blood Bank",
        address: "JAI Prabha Hospital Campus, Kankarbagh, Patna - 800020",
        pincode: "800020",
        Phone: 7947412556,
        Map: "https://maps.app.goo.gl/VS7khjEp6szApfTaA",
    },
    {
        name: "PMCH Blood Bank",
        address: "Ashok Rajpath, Bankipur, Patna - 800004 (Near Jahaji Kothi)",
        pincode: "800004",
        Phone: 7942686986,
        Map: "https://maps.app.goo.gl/JZEpzJTghMcfVwon7",
    },
    {
        name: "Jeevan Rekha Blood Bank",
        address: "C/O Gatwel Hospital, Bailey Road Raja Bazar, Sheikhpura, Patna - 800014 (Near Pillar No 52)",
        pincode: "800014",
        Phone: 794288070,
        Map: "https://maps.app.goo.gl/dgjTdDDDps1RvXce7",
    },
    {
        name: "Prathama Blood Centre",
        address: "K S Complex, Cantt Road, Danapur Bazar, Patna - 801503 (Near Saguna More)",
        pincode: "801503",
        Phone: 6115223311,
        Map: "https://maps.app.goo.gl/PWWEo2N4tSfQdvEf8",
    },
    {
        name: "Niramayah Blood Bank",
        address: "No 03, Kankarbagh, Patna - 800020 (Near SBI, Jogipur, Kumhrar)",
        pincode: "800020",
        Phone: 7947429226,
        Map: "https://maps.app.goo.gl/aYjkvLhtpuB98AfRA",
    },
    {
        name: "Kurji Holy Family Blood Bank",
        address: "Kurji, Patna - 800001",
        pincode: "800001",
        Map: "https://maps.app.goo.gl/QEvXg5MuqZ7WYnU16",
        Phone: 7947421242,
    },
    {
        name: "Palm View Blood Bank",
        address: "Bailey Road, Sheikhpura, Patna - 800014 (Near Jagdev Path)",
        pincode: "800014",
        Phone: 7947425320,
        Map: "https://maps.app.goo.gl/8uqrVQjFdx3A5WhY8",
    },
    {
        name: "Patliputra Blood Bank",
        address: "Ashok Rajpath, Bankipur, Patna - 800004 (Opposite PMCH ENT Outdoor)",
        pincode: "800004",
        Map: "https://maps.app.goo.gl/8vomH92L7QkXBUMs5",
        Phone: 7947425598,
    },
    // {
    //     name: "National Blood Bank & Research Centre",
    //     address: "Nc 2b, Main Road, Kankarbagh, Patna - 800020",
    //     pincode: "800020",
    //     Map: "https://maps.app.goo.gl/rG7BeLTYMVMde86a8",
    //     Phone: 7947427243,
    // },
];



console.log(bloodBanks[0].name);
console.log(bloodBanks[1].address); 

const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestions");

searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const filteredBanks = bloodBanks.filter(
        bank =>
            bank.name.toLowerCase().includes(query) ||
            bank.address.toLowerCase().includes(query) ||
            bank.pincode.includes(query)
    );

    suggestionsList.innerHTML = "";
    filteredBanks.forEach(bank => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>Name:</strong> ${bank.name}<br>
            <strong>Address:</strong> ${bank.address} (${bank.pincode})<br>
            <strong>Phone Number:</strong> ${bank.Phone}<br>
            <a href="${bank.Map}" target="_blank">Get Directions</a>
        `;
        li.addEventListener("click", () => {
            searchInput.value = bank.name; // Fill the input with the clicked suggestion
            suggestionsList.innerHTML = ""; // Hide suggestions
        });
        suggestionsList.appendChild(li);
    });
});

// Hide suggestions when input loses focus
searchInput.addEventListener("blur", () => {
    if (!searchInput.value.trim()) {
        suggestionsList.innerHTML = "";
    }
});

// Handle empty input
searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() === "") {
        suggestionsList.innerHTML = ""; // Hide suggestions when input is empty
    }
});
