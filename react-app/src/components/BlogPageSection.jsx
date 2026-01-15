import { blogPosts, blogSidebar } from '../data/siteContent'

const BlogPageSection = () => (
  <section className="section-padding">
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[3fr_1fr]">
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="card-neo overflow-hidden text-white transition hover:-translate-y-1"
          >
            <div className="relative h-52 w-full">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent" />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h2 className="text-xl font-semibold leading-snug">
                <a href="#" className="text-white hover:text-brand-accent">
                  {post.title}
                </a>
              </h2>
              <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                par {post.author} · {post.date}
              </div>
              <p className="text-sm text-slate-200">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
      <aside className="space-y-6 text-white">
        <div className="card-neo p-6">
          <h3 className="text-lg font-semibold mb-4">Recherche</h3>
          <input
            type="text"
            placeholder={blogSidebar.searchPlaceholder}
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder:text-white/50 focus:border-brand-primary focus:outline-none"
          />
        </div>
        <div className="card-neo p-6">
          <h3 className="text-lg font-semibold mb-4">Articles Populaires</h3>
          <ul className="space-y-3 text-sm text-slate-200">
            {blogSidebar.popularPosts.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-neo p-6">
          <h3 className="text-lg font-semibold mb-4">Commentaires Récents</h3>
          <ul className="space-y-3 text-sm text-slate-200">
            {blogSidebar.recentComments.map(({ name, post }) => (
              <li key={`${name}-${post}`}>
                <a href="#" className="text-white font-semibold">
                  {name}
                </a>{' '}
                <span className="text-slate-400">sur</span>{' '}
                <a href="#" className="hover:text-white">
                  {post}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  </section>
)

export default BlogPageSection
