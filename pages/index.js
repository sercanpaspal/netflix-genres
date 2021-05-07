import { genresFilterBySelectedTags, tagsFilterByGenres } from "../api";
import GenreList from "../components/genre-list";
import Layout from "../components/layout";
import TagList from "../components/tag-list";
import { useStore } from "../store";

const Home = ({ genres }) => {
  const [{ selectedTags }] = useStore();

  const filteredGenres = genresFilterBySelectedTags(genres, selectedTags);

  return (
    <Layout>
      <TagList tags={tagsFilterByGenres(filteredGenres)} />
      <GenreList genres={filteredGenres} />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/f/netflix-data/main/genres.tr.json"
  );
  const genres = await res.json();

  return { props: { genres } };
}

export default Home;
