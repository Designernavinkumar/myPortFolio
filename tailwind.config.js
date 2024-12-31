/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
        '1': '#40904D',
        '2': '#40904D',
        },
        black: {
        '1':'#1A1A1A',
        '2':'#333333',
        '3':'#4D4D4D',
        },
        Gray :{
        '1':'#FFFFFF',
        '2':'#F7F7F7',
        '3':'#E6E6E6',
        '4':'#CCCCCC',
        '5':'#B3B3B3',
        '6':'#666666',
        },
      },
      fontFamily: {
        noto: ['Noto Sans', 'sans-serif'],
        Sour: ['Sour Gummy', 'sans-serif'],
        Poppins : [ 'Poppins', 'sans-serif'],
        EBGaramond : ['EB Garamond', 'serif']
      },
      backgroundImage: {
        'my-profile-img': "url('/public/img/myImg.jpg')",
        'cloth-textsture-img': "url('/public/texsture/clothTextsture.jpg')",
      }
    },
  },
  plugins: [],
}

