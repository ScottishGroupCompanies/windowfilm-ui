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
        // Brand accent (the hero blue). Replace with the real one.
        brand: {
          DEFAULT: '#1e6fd9',
          dark: '#0f4a99',
          light: '#4d94e8',
        },
        ink: '#0d1b2a',     // text / dark backgrounds
        slate: '#1b2a3a',
      },
      fontFamily: {
        // Replace with the site's real fonts.
        display: ['Georgia', 'serif'],
        body: ['system-ui', 'sans-serif'],
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
