export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')];

export const server_loads = [];

export const dictionary = {
	"/": [3],
	"/about": [4],
	"/contacts": [~5],
	"/movies": [~6],
	"/settings": [7,[2]],
	"/settings/appearance": [8,[2]],
	"/settings/profile": [9,[2]],
	"/shop": [10],
	"/shop/[productId]": [11]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};