import { obtenirEntites } from "./CrudService"

export const obtenirMarques = () => {
    return obtenirEntites("marques");
}

export const obtenirModeles = () => {
    return obtenirEntites("modeles");
}

export const obtenirAnneeModele = () => {
    return obtenirEntites("anneeModeles");
}

export const obtenirBoiteDeVitesse = () => {
    return obtenirEntites("boiteDeVitesses");
}

export const obtenirCarburant = () => {
    return obtenirEntites("carburants");
}

export const obtenirCategorie = () => {
    return obtenirEntites("categorieVehicules");
}

export const obtenirPlaces = () => {
    return obtenirEntites("nombrePlaces");
}