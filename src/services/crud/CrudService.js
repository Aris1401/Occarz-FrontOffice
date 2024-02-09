import axiosInstance from "../api/Api";

export const obtenirEntites = (nom) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/user/" + nom).then((data) => {
            resolve(data.data)
        }).catch((err) => {
            
        })
    });
}