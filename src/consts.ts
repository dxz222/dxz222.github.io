export const SITE_TITLE = 'Xinzhe Dai';
export const SITE_DESCRIPTION =
  'AI for Science researcher working at the intersection of machine learning, materials science, and electron microscopy.';

export const CV_URL = '/files/CV_2026-08-17_xdai_v03.pdf';

export const CONTACT = {
  organization: 'Cornell University',
  addressLines: ['Materials Science and Engineering', 'Ithaca, New York'],
  emails: ['xd249@cornell.edu'],
};

export type SocialIcon = 'website' | 'scholar' | 'email' | 'github' | 'linkedin' | 'twitter';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=hTVrXdIAAAAJ&hl=en',
    icon: 'scholar',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/dxz222',
    icon: 'github',
  },
  {
    label: 'Email',
    href: 'mailto:xd249@cornell.edu',
    icon: 'email',
  },
];

export const FOOTER_CREDIT = {
  designerName: 'Shravan Goswami',
  designerUrl: 'https://shravangoswami.com',
  sourceLabel: 'Astro Scholar',
  sourceUrl: 'https://github.com/shravanngoswamii/astro-scholar',
};

export const UMAMI_SRC = import.meta.env.PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js';
export const UMAMI_WEBSITE_ID = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '';
