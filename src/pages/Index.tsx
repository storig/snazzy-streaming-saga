import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentRow from "@/components/ContentRow";
import Footer from "@/components/Footer";

const trendingNow = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg",
  },
  {
    id: 2,
    title: "The Crown",
    image: "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg",
  },
  // Add more movies as needed
];

const popularOnNetflix = [
  {
    id: 1,
    title: "Wednesday",
    image: "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg",
  },
  {
    id: 2,
    title: "Bridgerton",
    image: "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg",
  },
  // Add more movies as needed
];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-netflix-black">
      <Navbar />
      <main className="relative pb-24">
        <Hero />
        <div className="space-y-8 md:space-y-12">
          <ContentRow title="Trending Now" movies={trendingNow} />
          <ContentRow title="Popular on Netflix" movies={popularOnNetflix} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;