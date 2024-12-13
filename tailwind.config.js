module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      sora: ['Sora', 'sans-serif'],
    },
    extend: {
      animation: {
        bubble1: "bubble1 5s infinite",
        bubble2: "bubble2 6s infinite",
        bubble3: "bubble3 7s infinite",
        bubble4: "bubble4 8s infinite",
        bubble5: "bubble5 9s infinite",
      },
      keyframes: {
        bubble1: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-200px)", opacity: "0" },
        },
        bubble2: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-300px)", opacity: "0" },
        },
        bubble3: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-250px)", opacity: "0" },
        },
        bubble4: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-150px)", opacity: "0" },
        },
        bubble5: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-350px)", opacity: "0" },
        },
      },
      colors: {
        purple: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
};
