/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
  	extend: {
  		colors: {
  			'fg-primary': 'rgb(var(--color-fg-primary) / <alpha-value>)',
  			'fg-secondary': 'rgb(var(--color-fg-secondary) / <alpha-value>)',
  			'fg-tertiary': 'rgb(var(--color-fg-tertiary) / <alpha-value>)',
  			'fg-subtle': 'rgb(var(--color-fg-subtle) / <alpha-value>)',
  			'fg-inverse': 'rgb(var(--color-fg-inverse) / <alpha-value>)',
  			'bg-0': 'rgb(var(--color-bg-0) / <alpha-value>)',
  			'bg-1': 'rgb(var(--color-bg-1) / <alpha-value>)',
  			'bg-2': 'rgb(var(--color-bg-2) / <alpha-value>)',
  			'bg-3': 'rgb(var(--color-bg-3) / <alpha-value>)',
  			'bg-dimmed-1': 'rgb(var(--color-bg-dimmed-1) / 0.4)',
  			'bg-dimmed-2': 'rgb(var(--color-bg-dimmed-2) / 0.2)',
  			'bg-inverse': 'rgb(var(--color-bg-inverse) / <alpha-value>)',
  			'border-1': 'rgb(var(--color-border-1) / <alpha-value>)',
  			'border-2': 'rgb(var(--color-border-2) / <alpha-value>)',
  			'border-3': 'rgb(var(--color-border-3) / <alpha-value>)',
  			'border-inverse': 'rgb(var(--color-border-inverse) / <alpha-value>)',
			primary: 'rgb(var(--color-primary) / <alpha-value>)',
			'primary-strong': 'rgb(var(--color-primary-strong) / <alpha-value>)',
			'on-primary': 'rgb(var(--color-on-primary) / <alpha-value>)',
			danger: 'rgb(var(--color-danger) / <alpha-value>)',
			'on-danger': 'rgb(var(--color-on-danger) / <alpha-value>)',
			success: 'rgb(var(--color-success) / <alpha-value>)',
			'on-success': 'rgb(var(--color-on-success) / <alpha-value>)',
			warning: 'rgb(var(--color-warning) / <alpha-value>)',
			'on-warning': 'rgb(var(--color-on-warning) / <alpha-value>)',
			informative: 'rgb(var(--color-informative) / <alpha-value>)',
			'on-informative': 'rgb(var(--color-on-informative) / <alpha-value>)',
  		},
  		fontFamily: {
  			sans: [
  				'Pretendard',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			'0': '0',
  			'4': '4px',
  			'8': '8px',
  			'12': '12px',
  			'16': '16px',
  			'20': '20px',
  			'24': '24px',
  			'28': '28px',
  			'32': '32px',
			full: '9999px'
  		},
  		fontSize: {
  			h1: [
  				'48px',
  				{
  					lineHeight: '48px',
  					fontWeight: '800'
  				}
  			],
  			h2: [
  				'30px',
  				{
  					lineHeight: '36px',
  					fontWeight: '500'
  				}
  			],
  			'h2-b': [
  				'30px',
  				{
  					lineHeight: '36px',
  					fontWeight: '700'
  				}
  			],
  			h3: [
  				'24px',
  				{
  					lineHeight: '32px',
  					fontWeight: '500'
  				}
  			],
  			'h3-b': [
  				'24px',
  				{
  					lineHeight: '32px',
  					fontWeight: '700'
  				}
  			],
  			h4: [
  				'20px',
  				{
  					lineHeight: '28px',
  					fontWeight: '500'
  				}
  			],
  			'h4-b': [
  				'20px',
  				{
  					lineHeight: '28px',
  					fontWeight: '700'
  				}
  			],
  			h5: [
  				'18px',
  				{
  					lineHeight: '28px',
  					fontWeight: '500'
  				}
  			],
  			'h5-b': [
  				'18px',
  				{
  					lineHeight: '28px',
  					fontWeight: '700'
  				}
  			],
  			p1: [
  				'16px',
  				{
  					lineHeight: '24px',
  					fontWeight: '400'
  				}
  			],
  			'p1-b': [
  				'16px',
  				{
  					lineHeight: '24px',
  					fontWeight: '700'
  				}
  			],
  			p2: [
  				'14px',
  				{
  					lineHeight: '20px',
  					fontWeight: '400'
  				}
  			],
  			'p2-b': [
  				'14px',
  				{
  					lineHeight: '20px',
  					fontWeight: '700'
  				}
  			],
  			p3: [
  				'12px',
  				{
  					lineHeight: '16px',
  					fontWeight: '400'
  				}
  			],
  			'p3-b': [
  				'12px',
  				{
  					lineHeight: '16px',
  					fontWeight: '700'
  				}
  			],
  			caption1: [
  				'11px',
  				{
  					lineHeight: '14px',
  					fontWeight: '500'
  				}
  			],
  			'caption1-b': [
  				'11px',
  				{
  					lineHeight: '14px',
  					fontWeight: '700'
  				}
  			],
  			caption2: [
  				'10px',
  				{
  					lineHeight: '12px',
  					fontWeight: '500'
  				}
  			],
  			'caption2-b': [
  				'10px',
  				{
  					lineHeight: '12px',
  					fontWeight: '700'
  				}
  			]
  		}
  	}
  },
  plugins: [
    function({ addUtilities, theme }) {
      const typographyUtilities = {};
      const fontSizes = theme('fontSize');
      
      Object.keys(fontSizes).forEach((key) => {
        const [size, config] = fontSizes[key];
        typographyUtilities[`.${key}`] = {
          fontSize: size,
          lineHeight: config.lineHeight,
          fontWeight: config.fontWeight,
        };
      });
      
      addUtilities(typographyUtilities);
    },
      require("tailwindcss-animate")
],
}

