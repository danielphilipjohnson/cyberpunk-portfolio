/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	safelist: [
		'text-cp-accent',
		'text-cp-primary',
		'text-cp-glow',
		'text-cp-surface',
		'text-cp-bg',
		'bg-cp-accent',
		'bg-cp-primary',
		'bg-cp-glow',
		'bg-cp-surface',
		'bg-cp-bg',
		'border-cp-accent',
		'border-cp-primary',
		'border-cp-surface',
		'border-cp-bg',
	],


	theme: {
		extend: {
			testcolor: '#ff00ff',
			colors: {
				cp: {
					accent: '#ff2a6d',
					glow: '#d1f7ff',
					primary: '#05d9e8',
					surface: '#005678',
					bg: '#01012b',
				}
			}
		},
	}
};
