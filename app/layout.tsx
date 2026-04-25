import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './globals.css'
import { NextraSearchDialog } from '@/components/nextra-search-dialog'
import { SiteFooter } from '@/components/site-footer'
import { getPagesFromPageMap } from '@/lib/getPagesFromPageMap'
import { ThemeToggle } from '@/components/theme-toggle'
import { getSearchDocuments } from '@/lib/getSearchDocuments'

export const metadata: Metadata = {
  metadataBase: new URL('https://learn.sandeep.cv'),
  title: {
    default: 'Learn with Sandeep',
    template: '%s | Learn with Sandeep'
  },
  description: 'A living collection of everything I learn and document in tech.',
  keywords: [
    'Sandeep Prasad',
    'learn',
    'notes',
    'web development',
    'MERN stack',
    'Git',
    'Docker',
    'Nextra',
    'documentation',
    'developer learning',
    'second brain'
  ],
  authors: [{ name: 'Sandeep Prasad', url: 'https://sandeep.cv/' }],
  creator: 'Sandeep Prasad',
  publisher: 'Sandeep Prasad',
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/img/favicon.ico',
    shortcut: '/img/favicon.ico'
  },
  openGraph: {
    title: 'Learn with Sandeep',
    description: 'A living collection of everything I learn and document in tech.',
    url: 'https://learn.sandeep.cv',
    siteName: 'Learn with Sandeep',
    images: ['/img/docusaurus-social-card.jpg'],
    locale: 'en_US',
    type: 'website'
  }
}

const navbar = (
  <Navbar
    projectLink="https://github.com/Sandeep-Petwal/readmes"
    logoLink="/"
    logo={
      <span className="site-navbar__brand">
        <img src="/img/logo.png" alt="Learn with Sandeep" width={34} height={34} />
        <span>Learn with Sandeep</span>
      </span>
    }
  >
    <Link href="/docs/intro" className="site-navbar__link">
      My notes
    </Link>
    <Link href="/blog" className="site-navbar__link">
      Blog
    </Link>
    <a href="https://sandeep.cv/" className="site-navbar__link" target="_blank" rel="noreferrer">
      Website
    </a>
    <ThemeToggle />
  </Navbar>
)

const footer = (
  <Footer>
    <SiteFooter />
  </Footer>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()
  const pages = await getPagesFromPageMap({
    pageMapArray: pageMap
  })
  const searchDocuments = await getSearchDocuments()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/Sandeep-Petwal/readmes/tree/main"
          footer={footer}
          search={
            <NextraSearchDialog
              pages={pages}
              searchDocuments={searchDocuments}
              placeholder="Search notes and blog..."
            />
          }
          editLink={null}
          feedback={{ content: null }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ backToTop: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
