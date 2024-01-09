module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        other: { min: '340px', max: '1200px' },
      },
      colors: {
        // Configure your color palette here
        darkbg: '#1E293B',
      },
    },
  },
  plugins: [],
}
