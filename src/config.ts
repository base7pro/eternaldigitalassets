import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const COMMUNITY_INVITE_URL = ''

export const SiteMetadata = {
  title: 'Eternal Digital Assets',
  description: 'A champion of crypto self-custody solutions and digital estate management.',
  author: {
    name: 'Nic Neon',
    telegram: '@nicneon',
    email: 'info@eternaldigitalassets.com',
    summary: 'The self-custody guy'
  },
  org: {
    name: 'Eternal Digital Assets',
    twitter: '',
    url: 'https://eternaldigitalassets.com',
    email: 'info@eternaldigitalassets.com',
    summary:
      'Eternal Digital Assets is a company dedicated to responsible self-custody of digital assets. We are a team of cryptocurrency enthusiasts and developers passionate about safe backup and recovery of cryptos. EDA\'s mission is to produce tools and services that facilitate and the trustless and automated transfer of assets. Our goal to create the first user-friendly interface for a multi-encrypted and decentralized digital estate has been realized with the launch of Keyback.io'
  },
  location: 'Delaware, United States',
  repository: 'https://github.com/base7pro/eternaldigitalassets',
  buildTime: new Date()
}

export { default as Logo } from './assets/images/eda-logo-icon-blk-lrg.jpg'
export { default as LogoImage } from './assets/images/eda-lrg.png'
export { default as FeaturedSVG } from './assets/svg/undraw/undraw_nakamoto_-2-iv6.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  // { name: 'Blog', href: 'blog' },
  // { name: 'Docs', href: 'doc/introduction' }
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/base7pro/eternaldigitalassets`


export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' }
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }]
}
