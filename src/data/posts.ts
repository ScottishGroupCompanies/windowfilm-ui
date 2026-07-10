// Shared blog post data — used by the Blog Index and the two post layouts.
// Hero images reuse existing Cloudinary photos. Edit once here.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMins: number;
  hero: string;
  author: { name: string; role: string; avatar: string };
}

const MIKE = { name: 'Mike Kinsey', role: 'Co-Founder & President', avatar: '/images/team-mike-kinsey.jpg' };
const KATIE = { name: 'Katie Pelowich', role: 'VP Window Film', avatar: '/images/team-katie-pelowich.jpg' };

export const posts: BlogPost[] = [
  {
    slug: 'window-tinting-cost-2026',
    title: 'How Much Does Window Tinting Cost in 2026?',
    excerpt: 'A transparent breakdown of residential and commercial window film pricing — what drives cost, and how to budget your project.',
    category: 'Pricing',
    date: 'March 4, 2026',
    readMins: 6,
    hero: 'https://res.cloudinary.com/deunehrew/image/fetch/v1782907661/https://res.cloudinary.com/deunehrew/image/fetch/f_webp%2Cq_auto%2Cw_1200/https://d8j0ntlcm91z4.cloudfront.net/user_39gHIafquScvuUngNf6xPBDD37B/hf_20260615_175418_885cb5f7-7d7a-43f9-a1a2-33926a01abc1.png',
    author: MIKE,
  },
  {
    slug: 'best-film-west-facing-windows',
    title: 'The Best Window Film for West-Facing Windows',
    excerpt: 'West-facing glass takes the worst afternoon heat and glare. Here is how to pick a film that actually fixes it.',
    category: 'Guides',
    date: 'February 18, 2026',
    readMins: 8,
    hero: 'https://res.cloudinary.com/deunehrew/image/fetch/v1782907660/https://res.cloudinary.com/deunehrew/image/fetch/f_webp%2Cq_auto%2Cw_1200/https://d8j0ntlcm91z4.cloudfront.net/user_39gHIafquScvuUngNf6xPBDD37B/hf_20260615_175417_997747da-e186-459f-83ee-82d3a284366e.png',
    author: KATIE,
  },
  {
    slug: 'do-security-films-stop-break-ins',
    title: 'Do Security Films Really Stop Break-Ins?',
    excerpt: 'We put safety and security film to the test. Here is what it can and cannot do for your home or business.',
    category: 'Security',
    date: 'February 2, 2026',
    readMins: 7,
    hero: 'https://res.cloudinary.com/deunehrew/image/fetch/v1782765437/https://res.cloudinary.com/deunehrew/image/fetch/f_webp%2Cfl_awebp%2Cq_auto%2Cw_1200/https://d8j0ntlcm91z4.cloudfront.net/user_39gHIafquScvuUngNf6xPBDD37B/hf_20260615_163225_ef3d64e4-534f-42b3-bc9b-af78ddffac20.png',
    author: MIKE,
  },
  {
    slug: 'residential-vs-commercial-film',
    title: "Residential vs Commercial Window Film: What's the Difference?",
    excerpt: 'They look similar but solve different problems. A quick guide to choosing the right film for your building type.',
    category: 'Guides',
    date: 'January 21, 2026',
    readMins: 5,
    hero: 'https://res.cloudinary.com/deunehrew/image/fetch/v1782928259/https://res.cloudinary.com/deunehrew/image/fetch/f_webp%2Cq_auto%2Cw_1200/https://d8j0ntlcm91z4.cloudfront.net/user_39gHIafquScvuUngNf6xPBDD37B/hf_20260617_213616_509bcc09-ab60-49ed-a07e-c5f867aca22e.png',
    author: KATIE,
  },
  {
    slug: 'uv-protection-fading-furniture',
    title: 'How Window Film Stops Your Furniture From Fading',
    excerpt: 'UV rays quietly destroy floors, art, and upholstery. Here is the science of how film protects your interior.',
    category: 'Benefits',
    date: 'January 8, 2026',
    readMins: 6,
    hero: 'https://res.cloudinary.com/deunehrew/image/fetch/v1781795412/https://d8j0ntlcm91z4.cloudfront.net/user_39gHIafquScvuUngNf6xPBDD37B/hf_20260615_175446_f320deaf-2e71-4adf-917d-371be97bdf92.png',
    author: MIKE,
  },
  {
    slug: 'decorative-film-office-privacy',
    title: 'Decorative Film: Privacy Without Losing the Light',
    excerpt: 'Frosted and decorative films give offices privacy and branding while keeping spaces bright and open.',
    category: 'Decorative',
    date: 'December 15, 2025',
    readMins: 5,
    hero: 'https://res.cloudinary.com/deunehrew/image/fetch/v1782765436/https://res.cloudinary.com/deunehrew/image/fetch/f_webp%2Cfl_awebp%2Cq_auto%2Cw_1200/https://d8j0ntlcm91z4.cloudfront.net/user_39gHIafquScvuUngNf6xPBDD37B/hf_20260615_170303_116dd402-20cd-4cc2-96fd-f34262614195.png',
    author: KATIE,
  },
];
