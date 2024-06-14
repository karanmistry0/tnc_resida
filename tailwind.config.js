/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'agent': "url('/src/assets/form_img.png')",
        'contact':"url('/src/assets/contact_image.webp')"
      },
      colors: {
        'primary':"#e97777",
        'secondary':"#f8b304",
        "form-color":"#F4F4F4",
        "contact-color":"#2A78E9",
        "footer-color":"#12486B"
      }
    },
    
  },
  plugins: [],
};
