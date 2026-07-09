// Shared testimonial data — used by all three testimonial components.
// Faces map to /images/testimonial-1..6.jpg (in public/images).
// Edit quotes/names here once; all three components stay in sync.

export interface Testimonial {
  name: string;
  quote: string;
  detail: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'David R.',
    quote: 'Professional, fast, and the difference is unbelievable. Our whole home feels cooler and the glare is gone.',
    detail: 'Full home film — Center City',
    avatar: '/images/testimonial-1.jpg',
  },
  {
    name: 'Alex & Maria',
    quote: 'Great team, great product. The security film gives us total peace of mind and the lifetime warranty sealed it.',
    detail: 'Security + residential — Fishtown',
    avatar: '/images/testimonial-2.jpg',
  },
  {
    name: 'James W.',
    quote: 'Our storefront looks amazing and the anti-graffiti film has already paid for itself. Customers notice the difference.',
    detail: 'Decorative + security — South Philly',
    avatar: '/images/testimonial-3.jpg',
  },
  {
    name: 'Michael T.',
    quote: 'They did our entire office building. On time, clean, and the energy savings showed up on our very first bill.',
    detail: 'Commercial film — Old City',
    avatar: '/images/testimonial-4.jpg',
  },
  {
    name: 'Sarah M.',
    quote: 'Our living room stays cool and we finally have privacy. Honestly the best investment we made this year.',
    detail: 'Residential solar film — Manayunk',
    avatar: '/images/testimonial-5.jpg',
  },
  {
    name: 'Janet K.',
    quote: 'The glare is gone and my floors stopped fading. I should have done this years ago — the team was wonderful.',
    detail: 'UV protection film — Rittenhouse',
    avatar: '/images/testimonial-6.jpg',
  },
];
