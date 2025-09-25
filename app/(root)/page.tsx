import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
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
    </>
  );
}
