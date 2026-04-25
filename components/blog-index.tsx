import Link from 'next/link'

const posts = [
  {
    href: '/blog/2024-01-15-why-i-created-this-website',
    title: 'Why I Created This Website - My Learning Journey',
    date: 'January 15, 2024',
    description:
      'Why I started documenting everything I learn, and how this site became my personal knowledge base.'
  },
  {
    href: '/blog/2021-08-26-welcome',
    title: 'Welcome',
    date: 'August 26, 2021',
    description:
      'A quick intro to the blog and how the old Docusaurus blogging flow was originally set up.'
  },
  {
    href: '/blog/2021-08-01-mdx-blog-post',
    title: 'MDX Blog Post',
    date: 'August 1, 2021',
    description:
      'An example post showing how rich MDX content works inside the blog.'
  },
  {
    href: '/blog/2019-05-29-long-blog-post',
    title: 'Long Blog Post',
    date: 'May 29, 2019',
    description: 'A longer sample article preserved from the original site.'
  },
  {
    href: '/blog/2019-05-28-first-blog-post',
    title: 'First Blog Post',
    date: 'May 28, 2019',
    description: 'The first blog entry carried over from the original Docusaurus project.'
  }
]

export function BlogIndex() {
  return (
    <div className="blog-index">
      <div className="blog-index__intro">
        <p className="blog-index__eyebrow">Blog</p>
        <h1>Articles and learning updates</h1>
        <p>
          Every post from the old site is now here in the new Nextra app, with the original
          writing preserved.
        </p>
      </div>

      <div className="blog-index__list">
        {posts.map(post => (
          <article key={post.href} className="blog-index__item">
            <p className="blog-index__date">{post.date}</p>
            <h2>
              <Link href={post.href}>{post.title}</Link>
            </h2>
            <p>{post.description}</p>
            <Link href={post.href} className="blog-index__link">
              Read article
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
