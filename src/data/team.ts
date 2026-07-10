// Shared team data — used by all three team components.
// Photos map to /images/team-*.jpg (uploaded to public/images by Hermes).
// Edit once here; all three components update.

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export const team: TeamMember[] = [
  {
    name: 'Martin Faith',
    role: 'Co-Founder & CEO',
    bio: 'Specializes in engineering security solutions for large properties including sports arenas — designed installations at many of the nation\u2019s top venues.',
    photo: '/images/team-martin-faith.jpg',
  },
  {
    name: 'Mike Kinsey',
    role: 'Co-Founder & President',
    bio: 'Designed security solutions for 100+ schools in CO and neighboring states. Collaborates directly with law enforcement on a school-by-school basis.',
    photo: '/images/team-mike-kinsey.jpg',
  },
  {
    name: 'Katie Pelowich',
    role: 'VP Window Film & Project Manager',
    bio: '10 years industry experience, Master\u2019s Degree in Project Management. Coordinates projects nationwide.',
    photo: '/images/team-katie-pelowich.jpg',
  },
  {
    name: 'Travis Thompson',
    role: 'Sr. Site Superintendent & QC',
    bio: '10 years installing window film before moving into superintendent role. Manages up to 300 concurrent projects efficiently.',
    photo: '/images/team-travis-thompson.jpg',
  },
  {
    name: 'Blake Parish',
    role: 'Sr. Window Film Technician',
    bio: 'Scottish\u2019s first employee 18 years ago, 27 years combined experience. Expert installer and lead for installation quality control.',
    photo: '/images/team-blake-parish.jpg',
  },
  {
    name: 'Cannon Russell',
    role: 'Site Superintendent & Safety Mgr.',
    bio: 'OSHA-30 certified. Ensures workplaces are safe for both employees and clients on every project site.',
    photo: '/images/team-cannon-russell.jpg',
  },
  {
    name: 'Kelly Escorcia',
    role: 'Controller',
    bio: 'Specializes in construction accounting. Ensures complex project billings are accurate and seamless for every client.',
    photo: '/images/team-kelly-escorcia.jpg',
  },
  {
    name: 'Shanna Sweet',
    role: 'Window Tinting Operations Assistant',
    bio: 'Supports day-to-day operations for the Window Tinting Division. Coordinates scheduling, client communication, and office logistics from the Centennial office.',
    photo: '/images/team-shanna-sweet.jpg',
  },
];
