/** @type {import('tailwindcss').Config} */

// ============================================================================
//  ⚠️  IMPORTANT — READ THIS
//  ----------------------------------------------------------------------------
//  This file MUST be an EXACT copy of the tailwind.config.mjs from your
//  production repo (the live site). If the colors, fonts, or breakpoints
//  don't match, a component will look perfect here in the catalog but
//  broken when pasted into the real site.
//
//  STEP: open tailwind.config.mjs in your production repo, copy its contents,
//  and paste them here, replacing everything below.
//
//  The values below are EXAMPLES based on the site's look (dark theme,
//  blue accent). Adjust them to the real ones.
// ============================================================================

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        // Brand green — Window Film Philadelphia's accent (matches production).
        brand: {
          DEFAULT: '#7CB342',
          dark: '#5f9130',
          light: '#8fc756',
        },
        ink: '#0d1b2a',     // navy — text / dark backgrounds
        slate: '#12293f',   // lighter navy for cards
        cream: '#ece9e4',   // light section backgrounds
      },
      fontFamily: {
        // Fraunces = characterful serif display; Inter = clean UI/body.
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};
