/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        screens: {
            'mobile': '375px',
            'desktop': '1440px',
          },
				colors: {
						lightCyan: 'hsl(193, 38%, 86%)',
						neonGreen: 'hsl(150, 100%, 66%)',
						grayishBlue: 'hsl(217, 19%, 38%)',
						darkGrayishBlue: 'hsl(217, 19%, 24%)',
						darkBlue: 'hsl(218, 23%, 16%)',
					},
        fontFamily: {
            manrope: ['Manrope', 'sans-serif'],
        },
        fontWeight: {
            '800': 800,
        },
        fontSize: {
            '28': '28px',
      },
				letterSpacing: {
					'4': '4px',
				}
    },
    plugins: [],
  }
}