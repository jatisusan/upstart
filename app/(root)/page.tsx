import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: "post_001",
      _createdAt: new Date(),
      title: "AI-Powered Health Tracker",
      description:
        "A wearable that predicts health issues using AI and real-time monitoring.",
      image:
        "https://images.unsplash.com/photo-1531140035644-4ce1e6e1b85f?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      views: 152,
      author: {
        _id: "user_001",
        name: 'Klaus'
      },
      category: "HealthTech",
    },
    {
      _id: "post_004",
      _createdAt: new Date(),
      title: "Smart Farming Drones",
      description:
        "AI-driven drones that optimize crop monitoring and pesticide usage.",
      image:
        "https://ugm.ac.id/wp-content/uploads/2024/01/Smart-Farming-Bayu-1.jpg",
      views: 187,
      author: {
        _id: "user_004",
        name: 'John'
      },
      category: "AgriTech",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> connect with entrepreneurs.
        </h1>
        <p className="sub-heading">
          Submit ideas, explore new ventures and get noticed in virtual
          competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post) => <StartupCard key={post._id} post={post} />)
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
