// Site-wide details: contact links, the folder-tab navigation and the CV.

// Not shown on the site for now: a designed contact treatment is coming.
export const contact = {
  email: 'joshuafreemn@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joshuafreemn/',
};

export const froshting = 'https://froshting.com';

export interface NavItem {
  label: string;
  href: string;
}

// Labels follow the Figma tabs (V3): Motion · Design · Web · About.
export const nav: NavItem[] = [
  { label: 'Motion', href: '/showreel.html' },
  { label: 'Design', href: '/work.html' },
  { label: 'Web', href: '/web.html' },
  { label: 'About', href: '/cv.html' },
];

// Path to the web CV (no home address or phone number), relative to public/.
// Leave as null until the PDF is in public/; the download button only shows
// once it is set.
export const cvPdf: string | null = null;

export const showreel = {
  youtubeId: 'j4PVFSOV7Ro',
  title: 'Joshua Freeman showreel',
};
