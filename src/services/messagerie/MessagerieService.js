import axiosInstance from "../api/Api";

export const creerDiscussion = (idAnnonce) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post("/user/messagerie/discussions/creer/" + idAnnonce).then((data) => {
            resolve(data.data);
        }).catch((error) => {
            
        })
    });
}