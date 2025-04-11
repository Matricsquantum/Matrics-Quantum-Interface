/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Ensure this covers all files where you use Tailwind classes
    ],
    theme: {
      extend: {
        // Define your futuristic color palette here
        colors: {
          'matrics-cyan': '#00ffff',
          'matrics-blue': '#00bfff',
          'matrics-orange': '#ffa500',
          'matrics-dark': '#0a0f1a', // Dark background base
          'panel-bg': 'rgba(10, 15, 26, 0.7)', // Example semi-transparent dark bg
          'glow-cyan': '#00ffff',
          'glow-orange': '#ffa500',
        },
        // Optional: Define custom animations, fonts, etc.
        animation: {
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'rotate-calm': 'spin 20s linear infinite', // Example for globe
        },
        boxShadow: { // For glowing effects maybe
          'glow-cyan-sm': '0 0 8px rgba(0, 255, 255, 0.7)',
          'glow-cyan-md': '0 0 15px rgba(0, 255, 255, 0.8)',
          'glow-orange-sm': '0 0 8px rgba(255, 165, 0, 0.7)',
        },
        // Add other theme extensions as needed
      },
    },
    plugins: [],
  }