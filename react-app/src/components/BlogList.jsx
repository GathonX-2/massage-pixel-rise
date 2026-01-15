import { blogPosts } from '../data/siteContent'

const BlogList = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="pill mx-auto">Blog</span>
          <h2 className="mt-3 section-heading text-white">
            Conseils et actualités bien-être
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="card-neo flex flex-col overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {post.date}
                </div>
                <h3 className="text-xl font-semibold text-white leading-snug">{post.title}</h3>
                <p className="text-sm text-slate-200">{post.excerpt}</p>
                <p className="mt-auto text-sm text-white/70">Par {post.author}</p>
                <button className="text-left text-sm font-semibold text-brand-accent hover:text-white">
                  Lire l'article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
