/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			backgroundColor: {
				primary: "var(--primary)",
				type_bug: "var(--type-bug)",
				type_dark: "var(--type_dark",
				type_dragon: "#7037FF",
				type_electric: "#F9CF30",
				type_fairy: "#E69EAC",
				type_fighting: "#C12239",
				type_fire: "#F57D31",
				type_flying: "#A891EC",
				type_ghost: "#70559B",
				type_normal: "#AAA67F",
				type_grass: "#74CB48",
				type_ground: "#DEC16B",
				type_ice: "#9AD6DF",
				type_poison: "#A43E9E",
				type_psychic: "#FB5584",
				type_rock: "#B69E31",
				type_steel: "#B7B9D0",
				type_water: "#6493EB",
			},
			colors: {
				dark: "#212121",
				medium: "#666666",
				light: "#E0E0E0",
				background: "#EFEFEF",
			},
		},
	},
	plugins: [],
};
