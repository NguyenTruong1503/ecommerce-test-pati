/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '12.5': '50px',
        '26px': '26px',
        '34px': '34px',
        '25': '100px',
      },
      maxWidth: {
        'pagn-width': '1340px',
        'why-note-image': '920px',
        'title-width': '800px',
        'logo-sm': '120px',
        'logo-md': '160px',
        '50': '200px',
      },
      minHeight: {
        '150': '150px',
        '180': '180px',
      },
      colors: {
        'button-primary': '#ffffffd9',
        'green-primary': '#039869',
        'beige': '#f3eee0',
        'beige-2': '#f2ecdf',
        'border-light': '#d2d2d2',
        'light-gray': '#f7f7f7',
        'green-light': '#0c7c00',
        'pink-light': '#ffe3e3',
        'red-dark': '#a60003',
        'dark': '#1c1b1b',
        'beige-light': '#f7f2e7', 
        'start-color': '#fa8a8a',
        'day': '#737373'
      },
      fontFamily: {
        nunito: ['Nunito'],
        lora: ['Lora'],
        trirong: ['Trirong'],
        inter: ['Inter'],
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        'md': '16px',
        'sm': '14px',
        '20': '20px',
        '28': '28px',
        '32': '32px',
        '18': '18px',
      },
      lineHeight: {
        '1.3': '1.3em',
        '1.4': '1.4em',
        '1.5': '1.5em',
        '1.6': '1.6em',
      },
      marginBottom: {
        '35': '35px',
      },
      borderRadius: {
        'b-10': '10px',
      },
    },
  },
  plugins: [],
}