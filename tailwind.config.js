import { defineConfig } from '@tailwindcss/postcss'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a'
        },
        secondary: {
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          900: '#581c87'
        },
        neon: {
          blue: '#00d4ff',
          purple: '#b47eff',
          pink: '#ff6ec7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 50%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '25%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          },
          '75%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          }
        },
        'gradient-x': {
          '0%, 50%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '25%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 50%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '25%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
          '75%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
})