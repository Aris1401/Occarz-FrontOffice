import axiosInstance from "../api/Api";
import { getFiltres } from "../filtres/FiltresService";

export const getAllAnnonces = () => {
    return new Promise((resolve, reject) => {
        axiosInstance.post("/annonces/", getFiltres()).then((data) => {
            var response = data.data.data.annoncesFiltrees;
            resolve(response)
        }).catch((error) => {
            // reject(error)
            // console.log("Vous devez refaire une requete de connexion.");
        })
    });
}

export const getAnnonces = () => {
    return new Promise((resolve, reject) => {
        axiosInstance.post("/user/annonces/", getFiltres()).then((data) => {
            var response = data.data.data.annoncesFiltrees;
            resolve(response)
        }).catch((error) => {
            // reject(error)
            // console.log("Vous devez refaire une requete de connexion.");
        })
    });
}

export const getAnnoncesAvecFiltres = (filtreString) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/admin/annonces?" + filtreString).then((data) => {
            resolve(data.data)
        }).catch((err) => {
            
        })
    });
}

export const validerAnnonce = (idAnnonce) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post("/admin/annonces/valider/" + idAnnonce).then((data) => {
            resolve(data.data)
        }).catch((err) => {
            
        })
    });
}

export const obtenirImagesAnnonce = (idAnnonce) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/annonces/"+ idAnnonce + "/images").then((data) => {
            resolve(data.data)
        }).catch((err) => {
            
        })
    });
}