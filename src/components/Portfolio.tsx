import OptimizedImage from './OptimizedImage';

const portfolioItems = [
  { image: "/uploads/portfolio-1.png", link: "https://dribbble.com/shots/popular", title: "Dribbble Designs" },
  { image: "/uploads/portfolio-2.png", link: "https://www.awwwards.com/websites/portfolio/", title: "Awwwards Portfolios" },
  { image: "/uploads/portfolio-3.png", link: "https://www.behance.net/gallery/web-design", title: "Behance Web Design" },
  { image: "/uploads/portfolio-4.png", link: "https://github.com/ali-itexpert", title: "GitHub Profile" },
  { image: "/uploads/portfolio-5.png", link: "https://codepen.io/trending", title: "CodePen Trending" },
  { image: "/uploads/portfolio-6.png", link: "https://www.figma.com/community", title: "Figma Community" },
  { image: "/uploads/portfolio-3.png", link: "https://themeforest.net/category/site-templates", title: "ThemeForest Templates" },
  { image: "/uploads/portfolio-6.png", link: "https://www.producthunt.com", title: "Product Hunt" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col items-center px-6 md:px-16 mb-24 max-w-7xl mx-auto">
      <h2 className="text-foreground text-4xl font-bold mb-16 hover:text-primary transition-colors">
        Portfolio 📷
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {portfolioItems.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-lg shadow-lg border border-border hover:border-primary/50 group transition-all duration-300 hover:shadow-primary/15 hover:shadow-xl">
            <OptimizedImage src={item.image} alt={item.title} className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-500 cursor-pointer" loading="lazy" decoding="async" width={320} height={160} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
