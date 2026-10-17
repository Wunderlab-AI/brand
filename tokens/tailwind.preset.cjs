// Tailwind v3 preset. In your tailwind.config: presets: [require('@wunderlab/brand/tokens/tailwind.preset.cjs')]
// Tailwind v4 users: import tokens.css and map the variables in an @theme block instead.
module.exports = {
  theme: {
    extend: {
      colors: {
        wl: { ink: '#17122B', paper: '#F5F4FB', violet: '#6B4EFF', teal: '#2FD9BC', brass: '#FFC24D' },
      },
      fontFamily: {
        display: ['Lora', 'Georgia', 'serif'],
        ui: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: { 'wl-liquid': 'linear-gradient(90deg, #6B4EFF, #2FD9BC)' },
    },
  },
};
