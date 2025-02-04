import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentRow from "@/components/ContentRow";
import Footer from "@/components/Footer";

const trendingNow = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV5lteI3eHet1nPBQKC_uEChESjqQfYpRwMWLR0wUL9BXHmqY5RMGnxoWVzJLvl83_qhdeNIXnD3TGnrmUXqY8WCPrqEn1y4qwBH.jpg?r=60e",
  },
  {
    id: 2,
    title: "Wednesday",
    image: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXJ_2tguHcPec.jpg?r=b45",
  },
  {
    id: 3,
    title: "You",
    image: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZp_Y_VxoMtrmoRKVagkYq9_CzHx9HUXJqxvRtoQd0H65G5NrZogrDGxvRRvHEj0_-KUODQvAMbG6tiJ_GTY-woPpEEBHjRtbJQX.jpg?r=333",
  },
  {
    id: 4,
    title: "Dark",
    image: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRKrgH8PEYpqQYUZ2tAaXBLmlTwqwLi0RWGYCxOWVH3JBHP_JoGGwUltGC9vqF8HsOLhBHavLo7Rvz0_bM_2IVnqJhE3ZPF9V38l.jpg?r=50c",
  },
];

const popularOnNetflix = [
  {
    id: 1,
    title: "Squid Game",
    image: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc8Q8WMjz_LXQZ9q9liHGfjCHEI5rsE9_NHhYJhHqeKnhBJKTMKXP_LwtGc6Y2ZVkL4l9PBXyvxOfzvEEo7CNJ8j-BLLr8_q7CI.jpg?r=b5e",
  },
  {
    id: 2,
    title: "Money Heist",
    image: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWzPR8nR7Bcjz3Vgkn8zYyeOTjb5AtST5nKV0bTBEtZ8Oq4fV3r_9BGwqHHg4uuhHkf9txYGJRYmuUjxQZwQXHVO7yJQcrdRkzk.jpg?r=01d",
  },
  {
    id: 3,
    title: "Black Mirror",
    image: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfJd73Zb_7O5NS_qA_j60u8UoNECBW3qhPS7_unfgZaDj9xuNe0LWKQwE_7LR5KcF3DJTVhcl2qhNEDWQqxNc1U_-WsM7B_JRQE.jpg?r=7c1",
  },
  {
    id: 4,
    title: "The Witcher",
    image: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfP3E2V6oIzjmhsnLgJB5EQj9gWtCKZL3M_9EgL9GB5K0m1lWTFLK6dI_oEvhp_tkPXe5J99gvUUVBmzizU5uThxsD_Yh_TNgH0.jpg?r=873",
  },
];

const Index = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-netflix-black/10 to-netflix-black">
      <Navbar />
      <main className="relative pb-24">
        <Hero />
        <div className="space-y-6 md:space-y-10">
          <ContentRow title="Trending Now" movies={trendingNow} />
          <ContentRow title="Popular on Netflix" movies={popularOnNetflix} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;