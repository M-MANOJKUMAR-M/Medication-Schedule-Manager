import React, { useState } from "react";
import { TextField, Button, Autocomplete } from "@mui/material";

// Sample drug names for auto-completion
const DRUG_NAMES = [
    "Aspirin", "Ibuprofen", "Paracetamol", "Amoxicillin", "Metformin",
    "Omeprazole", "Atorvastatin", "Losartan", "Lisinopril", "Simvastatin",
    "Acetaminophen", "Naproxen", "Diclofenac", "Azithromycin", "Ciprofloxacin",
    "Cephalexin", "Doxycycline", "Fluoxetine", "Sertraline", "Citalopram",
    "Escitalopram", "Amitriptyline", "Lisinopril", "Amlodipine", "Hydrochlorothiazide",
    "Glyburide", "Glipizide", "Sitagliptin", "Lorazepam", "Alprazolam",
    "Clonazepam", "Diphenhydramine", "Fexofenadine", "Cetirizine", "Chlorpheniramine",
    "Phenytoin", "Carbamazepine", "Valproic Acid", "Lamotrigine", "Levetiracetam",
    "Atorvastatin", "Simvastatin", "Clopidogrel", "Warfarin", "Digoxin",
    "Omeprazole", "Esomeprazole", "Ranitidine", "Lansoprazole", "Metoclopramide",
    "Levothyroxine", "Albuterol", "Prednisone", "Fluticasone", "Tamsulosin",
    "Atenolol", "Nifedipine", "Verapamil", "Metoprolol", "Rosuvastatin",
    "Nitroglycerin", "Amiodarone", "Diltiazem", "Sotalol", "Eplerenone",
    "Hydralazine", "Isosorbide Mononitrate", "Minoxidil", "Phenobarbital", "Topiramate",
    "Bupropion", "Venlafaxine", "Mirtazapine", "Trazodone", "Duloxetine",
    "Buspirone", "Hydroxyzine", "Lansoprazole", "Pantoprazole", "Rabeprazole",
    "Chlordiazepoxide", "Meclizine", "Prochlorperazine", "Promethazine", "Scopolamine",
    "Acarbose", "Canagliflozin", "Dapagliflozin", "Empagliflozin", "Linagliptin",
    "Rosiglitazone", "Pioglitazone", "Saxagliptin", "Miglitol", "Repaglinide",
    "Insulin Glargine", "Insulin Aspart", "Insulin Lispro", "Insulin Detemir", "Glimepiride",
    "Zolpidem", "Eszopiclone", "Ramelteon", "Diphenhydramine", "Doxylamine",
    "Benzonatate", "Guaifenesin", "Pseudoephedrine", "Oxymetazoline", "Phenylephrine",
    "Mometasone", "Budesonide", "Triamcinolone", "Beclomethasone", "Flunisolide",
    "Cromolyn", "Montelukast", "Zafirlukast", "Theophylline", "Ipratropium",
    "Tiotropium", "Azelastine", "Olopatadine", "Ketotifen", "Bepotastine",
    "Zileuton", "Allegra", "Claritin", "Zyrtec", "Montelukast",
    "Desloratadine", "Levocetirizine", "Naphazoline", "Xylometazoline", "Tobramycin",
    "Gentamicin", "Neomycin", "Ciprofloxacin (ophthalmic)", "Ofloxacin (ophthalmic)", "Ketorolac",
    "Bacitracin", "Mupirocin", "Clindamycin", "Metronidazole", "Tinidazole",
    "Fluconazole", "Itraconazole", "Ketoconazole", "Terbinafine", "Voriconazole",
    "Acyclovir", "Valacyclovir", "Oseltamivir", "Zanamivir", "Ribavirin",
    "Sofosbuvir", "Harvoni", "Daclatasvir", "Ledipasvir", "Ombitasvir",
    "Simprevir", "Dasabuvir", "Glecaprevir", "Pibrentasvir", "Elbasvir",
    "Amantadine", "Rimantadine", "Lopinavir", "Ritonavir", "Darunavir",
    "Atazanavir", "Fosamprenavir", "Nelfinavir", "Saquinavir", "Efavirenz",
    "Rilpivirine", "Dolutegravir", "Bictegravir", "Elvitegravir", "Maraviroc",
    "Enfuvirtide", "Zidovudine", "Didanosine", "Stavudine", "Abacavir",
    "Tenofovir", "Emtricitabine", "Lamivudine", "Nevirapine", "Etravirine",
    "Dapsone", "Sulfamethoxazole/Trimethoprim", "Clofazimine", "Rifampin", "Rifabutin",
    "Rifapentine", "Linezolid", "Tedizolid", "Ciprofloxacin", "Metronidazole",
    "Nitazoxanide", "Ivermectin", "Albendazole", "Mebendazole", "Praziquantel",
    "Hydroxychloroquine", "Chloroquine", "Quinacrine", "Pentamidine", "Amphotericin B",
    "Flucytosine", "Griseofulvin", "Sodium Stibogluconate", "Miltefosine", "Eflornithine",
    "Acyclovir", "Foscarnet", "Valganciclovir", "Ganciclovir", "Adefovir",
    "Entecavir", "Telbivudine", "Lamivudine", "Zidovudine", "Telaprevir",
    "Boceprevir", "Caspofungin", "Micafungin", "Anidulafungin", "Voriconazole",
    "Posaconazole", "Isavuconazole", "Fidaxomicin", "Nirmatrelvir", "Ritonavir",
    "Vemurafenib", "Dabrafenib", "Trametinib", "Cetuximab", "Rituximab",
    "Bevacizumab", "Nivolumab", "Pembrolizumab", "Atezolizumab", "Durvalumab",
    "Lenvatinib", "Regorafenib", "Imatinib", "Dasatinib", "Nilotinib",
    "Bosutinib", "Ponatinib", "Sorafenib", "Sunitinib", "Axitinib",
    "Cabozantinib", "Tivozanib", "Ziv-aflibercept", "Ramucirumab", "Trastuzumab",
    "Pertuzumab", "Erbitux", "Adalimumab", "Infliximab", "Golimumab",
    "Certolizumab", "Natalizumab", "Ustekinumab", "Secukinumab", "Ixekizumab",
    "Tildrakizumab", "Guselkumab", "Risankizumab", "Dupilumab", "Omalizumab",
    "Mepolizumab", "Benralizumab", "Reslizumab", "Liraglutide", "Exenatide",
    "Semaglutide", "Dulaglutide", "Canagliflozin", "Dapagliflozin", "Empagliflozin",
    "Ertugliflozin", "Glecaprevir", "Pibrentasvir", "Ledipasvir", "Ombitasvir"
    // Add more drug names as needed
];


function MedicationForm({ onAdd }) {
    const [name, setName] = useState("");
    const [dosage, setDosage] = useState("");
    const [times, setTimes] = useState([""]);
    const [dailyDosage, setDailyDosage] = useState(1);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // Handle changes in daily dosage and update times accordingly
    const handleDosageChange = (value) => {
        const newTimes = Array.from({ length: value }, (_, i) => times[i] || "");
        setDailyDosage(value);
        setTimes(newTimes);
    };

    // Handle changes in individual reminder times
    const handleTimeChange = (index, value) => {
        const updatedTimes = [...times];
        updatedTimes[index] = value;
        setTimes(updatedTimes);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Send the medication data in the expected format
        onAdd({
            name,
            dosage,
            startDate: new Date(startDate).toISOString(),
            endDate: new Date(endDate).toISOString(),
            times, // Reminder times (e.g., ["10:00", "14:00"])
        });

        // Reset form fields
        setName("");
        setDosage("");
        setDailyDosage(1);
        setTimes([""]);
        setStartDate("");
        setEndDate("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            {/* Medication Name (Auto-complete dropdown) */}
            <Autocomplete
                options={DRUG_NAMES}
                value={name}
                onChange={(e, newValue) => setName(newValue)}
                renderInput={(params) => (
                    <TextField {...params} label="Medication Name" fullWidth required />
                )}
            />
            {/* Dosage Input */}
            <TextField
                label="Dosage"
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
                fullWidth
                required
            />
            {/* Daily Dosage Input (How many times the medication is taken per day) */}
            <TextField
                label="Daily Dosage"
                type="number"
                value={dailyDosage}
                onChange={(e) => handleDosageChange(Number(e.target.value))}
                fullWidth
                required
                inputProps={{ min: 1 }}
            />
            {/* Reminder Times Inputs (One for each daily dosage) */}
            {Array.from({ length: dailyDosage }).map((_, index) => (
                <TextField
                    key={index}
                    label={`Timing ${index + 1} (e.g., 14:00)`}
                    value={times[index] || ""}
                    onChange={(e) => handleTimeChange(index, e.target.value)}
                    fullWidth
                    required
                />
            ))}
            {/* Start Date Input (Datetime picker) */}
            <TextField
                label="Start Date"
                type="datetime-local"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                fullWidth
                required
                InputLabelProps={{
                    shrink: true,
                }}
            />
            {/* End Date Input (Datetime picker) */}
            <TextField
                label="End Date"
                type="datetime-local"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                fullWidth
                required
                InputLabelProps={{
                    shrink: true,
                }}
            />
            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Medication
            </Button>
        </form>
    );
}

export default MedicationForm;
