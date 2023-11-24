/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx }"],
	theme: {
		fontFamily: {
			inter: ["Inter", "sans-serif"],
			poppins: ["Poppins", "sans-serif"],
			"space-odyssey": ["Space Odyssey", "sans-serif"],
			nano: ["Nano", "sans-serif"],
			"aeonik-pro": ["Aeonik Pro TRIAL", "sans-serif"],
		},
		extend: {
			colors: {
				"rich-black": "#030014",
				"tropical-indigo": "#BA9CFF79",
				"tropical-indigo-fade": "#BA9CFF0E",
				white: "#ffffffe6",
			},
			backgroundColor: {
				"rgba-white":
					"rgba(255, 255, 255, 0.9)" /* Valores RGBA personalizados */,
				"white-02": "#ffffff05",
			},
			borderColor: {
				"white-08": "#ffffff14",
				"gradient-custom":
					"linear-gradient(90.01deg, rgba(229,156,255,.24) 0.01%, rgba(186,156,255,.24) 50.01%, rgba(156,178,255,.24) 100%)",
			},
		},
	},
	plugins: [typography],
};
