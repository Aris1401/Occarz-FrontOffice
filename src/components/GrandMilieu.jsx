import React, { useEffect, useState } from 'react';
import { Card, Select } from 'antd';
import Milieu from './Milieu';
import { getAnnonces } from '../services/annonces/AnnoncesServices';

const { Option } = Select;

const GrandMilieu = () => {
	// Annonces
	const [ annonces, setAnnoces ] = useState([])
	const [ resultatsNombre, setResultatsNombre ] = useState(0)
	useEffect(() => {
		getAnnonces().then((data) => {
			setAnnoces(data)
			setResultatsNombre(data.length)
		})
	}, [])

	const handleChange = (value) => {
		console.log(`Option sélectionnée: ${value}`);
	};


	return (
		<Card title="Grand Milieu" bordered={false}
			style={{
				width: 1000,
				marginLeft: 20,
				height: '100%',
				marginTop: 1,
			}}>

			<div style={{ display: 'flex', alignItems: 'center' }}>
				<h6 style={{ marginRight: 'auto', marginBottom: 0 }}>Resultat: { resultatsNombre } Annonces</h6>
				<div style={{ marginRight: 10 }}>

					<Select
						defaultValue="option1"
						style={{ width: 100 }}
						onChange={handleChange}
					>
						<Option value="option1">Option 1</Option>
						<Option value="option2">Option 2</Option>
					</Select>

				</div>
				<Select
					defaultValue="option1"
					style={{ width: 100 }}
					onChange={handleChange}
				>
					<Option value="option1">Option 1</Option>
					<Option value="option2">Option 2</Option>
				</Select>
			</div>

			<div style={{ overflowY: 'scroll', height: '100%' }} className='d-flex flex-column gap-1'>
				{ annonces.map((annonce, index) => {
					return <Milieu annonce= {annonce} />;
				}) }
			</div>
		</Card>
	);
};

export default GrandMilieu;
