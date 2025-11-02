import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "5 Signs Your Business Needs Process Optimization",
    excerpt: "Learn to identify the key indicators that your operations could benefit from streamlining and optimization.",
    date: "March 15, 2024",
    category: "Process",
    readTime: "5 min read",
  },
  {
    title: "Building a Culture of Collaboration",
    excerpt: "Discover practical strategies for fostering teamwork and collaboration across your organization.",
    date: "March 10, 2024",
    category: "Culture",
    readTime: "7 min read",
  },
  {
    title: "The ROI of Leadership Development",
    excerpt: "Why investing in your leadership team pays dividends in organizational performance and employee retention.",
    date: "March 5, 2024",
    category: "Leadership",
    readTime: "6 min read",
  },
  {
    title: "Systems Thinking for Business Growth",
    excerpt: "How adopting a systems perspective can unlock new opportunities for sustainable growth.",
    date: "February 28, 2024",
    category: "Strategy",
    readTime: "8 min read",
  },
  {
    title: "Change Management: A Practical Guide",
    excerpt: "Navigate organizational change successfully with these proven frameworks and best practices.",
    date: "February 20, 2024",
    category: "Change",
    readTime: "10 min read",
  },
  {
    title: "Measuring What Matters: KPIs for Success",
    excerpt: "Identify and track the metrics that truly drive business performance and strategic alignment.",
    date: "February 15, 2024",
    category: "Performance",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-card">
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-testid="text-blog-page-title">
              Insights & Articles
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert perspectives on business strategy, leadership, and organizational development
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="hover-elevate active-elevate-2 cursor-pointer overflow-hidden"
                  data-testid={`card-blog-${index}`}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" data-testid={`badge-category-${index}`}>
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground" data-testid={`text-read-time-${index}`}>
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground" data-testid={`text-blog-title-${index}`}>
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4" data-testid={`text-blog-excerpt-${index}`}>
                      {post.excerpt}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-blog-date-${index}`}>
                      {post.date}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
