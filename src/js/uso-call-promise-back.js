import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css';

const heroeId = 'iron';
const heroeId2 = 'capi';
const heroeId3 = 'spider';

// buscarHeroe(heroeId, (err, heroe) => {
// 	if (err) return console.error(err);
// 	buscarHeroe(heroeId2, (err, heroe2) => {
// 		if (err) return console.error(err);
// 		console.log(`Enviando a ${heroe.nombre} Y ${heroe2.nombre} a la misión`);
// 	});
// 	buscarHeroe(heroeId3, (err, heroe3) => {
// 		if (err) return console.error(err);
// 		console.log(`Enviando a ${heroe.nombre} Y ${heroe3.nombre} a la misión`);
// 	});
// });

// buscarHeroe(heroeId).then((heroe) => {
// 	buscarHeroe(heroeId2).then((heroe2) => {
// 		console.log(`Enviando a ${heroe.nombre} Y ${heroe2.nombre} a la misión`);
// 	});
// });

Promise.all([ buscarHeroe(heroeId), buscarHeroe(heroeId2) ])
	.then(([ heroe, heroe2 ]) => {
		console.log(`Enviando a ${heroe.nombre} Y ${heroe2.nombre} a la misión`);
	})
	.catch((err) => {
		alert(err);
	})
	.finally(() => {
		console.log('Final de la promesa');
	});
