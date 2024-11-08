/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			colors: {
				lightred: {
					100: '#ecd4d5',
					200: '#d8aaaa',
					300: '#c57f80',
					400: '#b15555',
					500: '#9e2a2b',
					600: '#7e2222',
					700: '#5f191a',
					800: '#3f1111',
					900: '#200809'
				},
				darkred: {
					100: '#ddcecf',
					200: '#bb9d9f',
					300: '#986d6e',
					400: '#763c3e',
					500: '#540b0e',
					600: '#43090b',
					700: '#320708',
					800: '#220406',
					900: '#110203'
				},
				redorange: {
					100: '#ffd9cc',
					200: '#ffb399',
					300: '#ff8e66',
					400: '#ff6833',
					500: '#ff4200',
					600: '#cc3500',
					700: '#992800',
					800: '#661a00',
					900: '#330d00'
				},
				pastelwhite: {
					100: '#fffdef',
					200: '#fffadf',
					300: '#fff8d0',
					400: '#fff5c0',
					500: '#fff3b0',
					600: '#ccc28d',
					700: '#99926a',
					800: '#666146',
					900: '#333123'
				},
				indigo: {
					100: '#d6dee1',
					200: '#adbec2',
					300: '#859da4',
					400: '#5c7d85',
					500: '#335c67',
					600: '#294a52',
					700: '#1f373e',
					800: '#142529',
					900: '#0a1215'
				},
				surface: {
					100: '#fdfdfb',
					200: '#fbfaf7',
					300: '#f9f8f3',
					400: '#f7f5ef',
					500: '#f5f3eb',
					600: '#e6e3da',
					700: '#93928d',
					800: '#62615e',
					900: '#31312f'
				}
			}
		}
	},
	plugins: []
};
