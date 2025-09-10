// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // scroll left by half width
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        scroll: 'scroll 20s linear infinite',  // smooth infinite scroll animation
      },
    },
  },
  plugins: [],
};
