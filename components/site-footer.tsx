import Link from 'next/link'

export function SiteFooter() {
  return (
    <div className="site-footer">
      <div className="site-footer__grid">
        <div>
          <h3>Documentation</h3>
          <ul>
            <li>
              <Link href="/docs/Frontend">Frontend Technologies</Link>
            </li>
            <li>
              <Link href="/docs/Backend">Backend Technologies</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Connect</h3>
          <ul>
            <li>
              <a href="https://sandeep.cv/" target="_blank" rel="noreferrer">
                Website
              </a>
            </li>
            <li>
              <a href="https://github.com/Sandeep-Petwal/" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3>More</h3>
          <ul>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/docs/intro">About</Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="site-footer__copyright">
        Copyright (c) {new Date().getFullYear()} Sandeep Prasad. Built with Next.js and Nextra.
      </p>
    </div>
  )
}
