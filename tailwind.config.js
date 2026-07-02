/** @type {import('tailwindcss').Config} */
// Force rebuild trigger - Editorial Minimalist Luxury v3
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Editorial Minimalist Luxury Palette
        primary: '#1A1A1A', // Deep charcoal/warm black
        'primary-foreground': '#FDFBF7', // Soft off-white
        secondary: '#F9F6F0', // Warm cream/linen
        'secondary-foreground': '#1A1A1A',
        accent: '#8B7355', // Muted bronze/terracotta
        'accent-foreground': '#1A1A1A',
        
        // Neutral palette
        foreground: '#1A1A1A',
        background: '#FDFBF7',
        card: '#F9F6F0',
        'card-foreground': '#1A1A1A',
        muted: '#E8E3DB',
        'muted-foreground': '#6B6B6B',
        border: '#D9D4CC',
        input: '#F9F6F0',
        ring: '#8B7355',
        destructive: '#EF4444',
        'destructive-foreground': '#FDFBF7',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Plus Jakarta Sans', 'DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        // Editorial type scale
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.05' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
        'editorial': '0.35em',
      },
      boxShadow: {
        // Soft, expansive shadows for luxury feel
        sm: '0 2px 4px rgba(26, 26, 26, 0.04)',
        base: '0 4px 6px rgba(26, 26, 26, 0.08)',
        md: '0 8px 12px rgba(26, 26, 26, 0.06)',
        lg: '0 12px 24px rgba(26, 26, 26, 0.08)',
        xl: '0 20px 40px rgba(26, 26, 26, 0.08)',
        '2xl': '0 25px 50px rgba(26, 26, 26, 0.08)',
        none: 'none',
        'inner-subtle': 'inset 0 1px 2px rgba(26, 26, 26, 0.04)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        md: '12px',
        lg: '16px',
      },
    },
  },
  plugins: [],
};
