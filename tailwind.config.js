module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        shruti:

        {
          50: '#ffe6f0',
          100: '#f5bfce',
          200: '#e897ae',
          300: '#de6e8d',
          400: '#d3466d',
          500: '#b92c53',
          600: '#912141',
          700: '#69172e',
          800: '#410b1c',
          900: '#1d0009',
        },
        navColor: 
        {
          50: '#efeffd',
          100: '#d1d2e4',
          200: '#b2b4cc',
          300: '#9396b7',
          400: '#7579a2',
          500: '#5c5f89',
          600: '#474a6b',
          700: '#33354d',
          800: '#1d2030',
          900: '#070b16',
        },
        signin:
        {
          50: '#ffe3eb',
          100: '#ffb3c2',
          200: '#fb8399',
          300: '#f95370',
          400: '#f62448',
          500: '#dc0d2f',
          600: '#ac0624',
          700: '#7c031a',
          800: '#4c000e',
          900: '#1f0003',
        },
        premier:
        {
          100: "#2B3148"
        },
        rating:
        {
          100: "#333333"
        },
        review: 
        {
          100: "#CCCCCC"
        }
        
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
