import Link from 'next/link'

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__background" aria-hidden="true">
        <div className="home-hero__shape home-hero__shape--one" />
        <div className="home-hero__shape home-hero__shape--two" />
        <div className="home-hero__shape home-hero__shape--three" />
        <div className="home-hero__shape home-hero__shape--four" />
      </div>

      <div className="home-hero__content">
        <p className="home-hero__eyebrow">Learn with Sandeep</p>
        <h1 className="home-hero__title">
          Learn. Build. <span>Document.</span>
        </h1>
        <p className="home-hero__tagline">
          A living collection of everything I learn and document in tech.
        </p>
        <div className="home-hero__actions">
          <Link href="/docs/intro" className="home-hero__button home-hero__button--primary">
            Start Exploring
          </Link>
          <Link href="/blog" className="home-hero__button home-hero__button--secondary">
            Latest Updates
          </Link>
        </div>
      </div>
    </section>
  )
}
