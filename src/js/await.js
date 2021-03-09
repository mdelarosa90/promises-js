import { buscarHeroeAsync, buscarHeroe } from './promesas';

const heroesIds = [ 'capi', 'iron', 'spider' ];
const heroesPromesas = heroesIds.map(buscarHeroe);

export const obtenerHeroesArr = async () => {
	//const heroesArr = [];

	// 	for (const id of heroesIds) {
	// 		// buscarHeroeAsync(id).then((heroe) => heroesArr.push(heroe));
	// 		// const heroe = await buscarHeroe(id);
	// 		// heroesArr.push(heroe);
	// 		heroesArr.push(buscarHeroe(id));
	// 	}

	// 	return await Promise.all(heroesArr);

	return await Promise.all(heroesIds.map(buscarHeroe));
};

export const obtenerHeroeAwait = async (id) => {
	try {
		const heroe = await buscarHeroeAsync(id);
		return heroe;
	} catch (err) {
		console.log('CATCH!!');
		return {
			nombre: 'sin nombre',
			poder: 'sin poder'
		};
	}
};

export const heroesCiclo = async () => {
	console.time('HeroesCiclo');

	// heroesPromesas.forEach(async (h) => console.log(await h));

	for await (const heroe of heroesPromesas) {
		console.log(heroe);
	}

	console.timeEnd('HeroesCiclo');
	// const heroes = await Promise.all(heroesPromesas);
	// heroes.forEach(console.log);
};

export const heroeIfAwait = async (id) => {
	if ((await buscarHeroeAsync(id)).nombre === 'Iron Man') {
		console.log('Es el mejor de todos');
	} else {
		console.log('Naaa');
	}
};
