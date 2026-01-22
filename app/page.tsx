import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getAllPosts } from "@/lib/posts"
import { SkillsDialog } from "@/components/skills-dialog"

export default async function Home() {
  const posts = await getAllPosts()
  const recentPosts = posts.slice(0, 3)

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/aphextwin_pc.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">KenyuF</h1>
          <nav className="flex items-center gap-4">
            <Link href="/blog">
              <Button variant="ghost">Blog</Button>
            </Link>
            <SkillsDialog />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
　　　　　<h2 className="text-5xl font-bold mb-4 text-balance text-black" style={{ color: 'black' }}>
  　　　　　Welcome to My Development Journey
        </h2>
        <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
          A daily diary of coding adventures, tech explorations, and lessons learned along the way.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/blog">
            <Button size="lg">Read the Blog</Button>
          </Link>
          <SkillsDialog>
            <Button size="lg" variant="outline">
              View My Skills
            </Button>
          </SkillsDialog>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8">Latest Articles</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h4 className="text-xl font-semibold mt-2 mb-3 text-balance">{post.title}</h4>
                  <p className="text-muted-foreground text-pretty">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        {posts.length > 3 && (
          <div className="text-center mt-8">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                View All Articles
              </Button>
            </Link>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t mt-20 py-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KenyuF. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
