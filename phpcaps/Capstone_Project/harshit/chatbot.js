const symptomsInput = document.getElementById("symptomsInput");
const submitButton = document.getElementById("submitButton");
const responseText = document.getElementById("responseText");

submitButton.addEventListener("click", function () {
    const symptoms = symptomsInput.value.toLowerCase(); // Convert input to lowercase
    
    const recommendedMedicines = {  
        "fever": ["Paracetamol", "Ibuprofen"],
        "cough": ["Dextromethorphan", "Honey"],
        "headache": ["Aspirin", "Acetaminophen"],
        "cold": ["Antihistamines", "Decongestants"],
        "malaria": ["Antimalarial medications (e.g., Chloroquine)", "Insect repellents (prevention)"],
        "diarrhea": ["Loperamide", "Oral Rehydration Solution"],
        "filariasis": ["Antiparasitic drugs (e.g., Diethylcarbamazine)", "Mosquito control (prevention)"],
        "scrub typhus": ["Doxycycline", "Supportive care"],
        "lassa fever": ["Ribavirin", "Supportive care"],"hantavirus pulmonary syndrome": ["Supportive care", "No specific antiviral treatment"],
    "kyasanur forest disease (kfd)": ["Supportive care", "No specific antiviral treatment"],
    "nipah virus": ["Supportive care", "Ribavirin (experimental)"],
    "avian influenza (bird flu)": ["Oseltamivir (Tamiflu)", "Zanamivir (Relenza)"],
    "swine flu (h1n1 influenza)": ["Oseltamivir (Tamiflu)", "Zanamivir (Relenza)"],
    "monkeypox": ["Supportive care", "No specific antiviral treatment"],
    "chandipura virus": ["Supportive care", "No specific antiviral treatment"],
    "buffalopox": ["Supportive care", "No specific antiviral treatment"],
    "chikungunya": ["Paracetamol", "Ibuprofen"],
    "japanese encephalitis": ["Supportive care",  "Vaccination (prevention)"],
    "dengue fever": ["Fluid replacement therapy", "Pain relievers (e.g., Paracetamol)"],"malaria": ["Antimalarial medications (e.g., Chloroquine)", "Insect repellents (prevention)"],
    "tuberculosis (tb)": ["Antitubercular drugs (e.g., Isoniazid)", "Directly Observed Treatment (DOTS)"],
    "typhoid fever": ["Antibiotics (e.g., Ciprofloxacin)", "Hydration and rest"],
    "leptospirosis": ["Antibiotics (e.g., Doxycycline)", "Supportive care"],
    "hiv/aids": ["Antiretroviral therapy (ART)", "Pre-exposure prophylaxis (PrEP)"],
    "measles": ["Vitamin A supplementation", "Supportive care"],
    "chickenpox (varicella)": ["Acyclovir", "Calamine lotion (for itching)"],
    "rabies": ["Post-exposure prophylaxis (PEP)", "Rabies vaccine"],
    "tetanus": ["Tetanus immunoglobulin (TIG)", "Tetanus toxoid vaccine"],
    "cholera": ["Oral rehydration solution (ORS)", "Antibiotics (e.g., Doxycycline)"],
    "yellow fever": ["Yellow fever vaccine", "Supportive care"],
    };

    if(recommendedMedicines[symptoms]) {
        responseText.textContent = `For ${symptoms}, Recommended Medicines: ${recommendedMedicines[symptoms].join(", ")}`;
    } else {
        responseText.textContent = `Please type your disease... .`;
    }
});
