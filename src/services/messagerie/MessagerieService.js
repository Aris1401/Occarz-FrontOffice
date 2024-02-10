import axiosInstance from "../api/Api";

export const creerDiscussion = (idAnnonce) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post("/user/messagerie/discussions/creer/" + idAnnonce).then((data) => {
            resolve(data.data);
        }).catch((error) => {
            
        })
    });
}

export const listeDesDiscussions = () => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/user/messagerie/discussions").then((data) => {
            resolve(data.data)
        }).catch((error) => {

        })
    });
}

export const listeDesMessages = (idDiscussion) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/user/messagerie/discussions/" + idDiscussion + "/messages").then((data) => {
            resolve(data.data)
        }).catch((error) => {

        })
    });
}

export const envoyerMessage = (message, idDiscussion) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post("/user/messagerie/discussions/" + idDiscussion + "/messages", {message: message}).then((data) => {
            resolve(data.data)
        }).catch((error) => {

        })
    });
}