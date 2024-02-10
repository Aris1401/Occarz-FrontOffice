export const getFiltres = () => {
    if (localStorage.getItem("filtres")) {
        return JSON.parse(localStorage.getItem("filtres"))
    } else {
        return {}
    }
}

export const ajouterFiltre = (nom, valeur) => {
    let filtres = getFiltres()

    filtres[nom] = valeur;

    localStorage.setItem("filtres", JSON.stringify(filtres))
}

export const ajouterArrayFiltre = (nom, valeur) => {
    let filtres = getFiltres()

    filtres[nom] = [...filtres[nom], valeur]

    localStorage.setItem("filtres", JSON.stringify(filtres))
}

export const ajouterFiltreAObjet = (nom, valeur) => {
    let filtres = getFiltres();

    // Check if the 'vehicule' attribute exists and if not, create it as an empty array
    if (!filtres['vehicule']) {
        filtres['vehicule'] = [];
    }

    // Check if the 'nom' already exists in the 'vehicule' array
    const existingIndex = filtres['vehicule'].findIndex(item => item.hasOwnProperty(nom));

    // If 'nom' exists, replace its value, otherwise add a new object
    if (existingIndex !== -1) {
        filtres['vehicule'][existingIndex][nom] = valeur;
    } else {
        // Push the new object to the 'vehicule' array
        filtres['vehicule'].push({ [nom]: valeur });
    }

    localStorage.setItem("filtres", JSON.stringify(filtres))
}

export const effacerFiltres = () => {
    localStorage.removeItem("filtres")
}