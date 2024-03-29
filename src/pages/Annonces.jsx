import React, { useEffect, useState } from 'react';
import GrandMilieu from '../components/GrandMilieu';
import { getAllAnnonces } from '../services/annonces/AnnoncesServices';


const Annonces =()=>{
    const [ annonces, setAnnoces ] = useState([])
	const [ resultatsNombre, setResultatsNombre ] = useState(0)
	useEffect(() => {
		getAllAnnonces().then((data) => {
			setAnnoces(data)
			setResultatsNombre(data.length)
		})
	}, [])

    return(
        <GrandMilieu annonces={annonces} resultatsNombre = {resultatsNombre} />
    );
};
export default Annonces;

