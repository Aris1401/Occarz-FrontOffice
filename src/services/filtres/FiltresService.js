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