import React, { useEffect, useState } from 'react';
import GrandMilieu from '../components/GrandMilieu';
import { getAnnoncesFavoris } from '../services/annonces/AnnoncesServices';


const AnnoncesFavoris =()=>{
    const [ annonces, setAnnoces ] = useState([])
	const [ resultatsNombre, setResultatsNombre ] = useState(0)
	useEffect(() => {
		getAnnoncesFavoris().then((data) => {
			setAnnoces(data)
			setResultatsNombre(data.length)
		})
	}, [])

    return(
        <GrandMilieu annonces={annonces} resultatsNombre = {resultatsNombre} />
    );
};
export default AnnoncesFavoris;

