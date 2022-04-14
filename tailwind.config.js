module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      scale: {
        '101': '1.01',
      },
      boxShadow: {
        'deepInner': 'inset 0 4px 8px 4px rgb(0 0 0 / 0.5)',
      }
    }
  },
}
