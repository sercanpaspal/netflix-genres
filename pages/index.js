import {
  filterGenresBySelectedTags,
  filterTagsByGenresAndLocale,
  getGenresByLocale,
} from "../api";
import GenreList from "../components/genre-list";
import Layout from "../components/layout";
import TagList from "../components/tag-list";
import { useStore } from "../store";

const Home = ({ genres, locale }) => {
  const [{ selectedTags }] = useStore();

  const filteredGenres = filterGenresBySelectedTags(genres, selectedTags);

  return (
    <Layout>
      <TagList tags={filterTagsByGenresAndLocale(filteredGenres, locale)} />
      <GenreList genres={filteredGenres} />
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const genres = await getGenresByLocale(locale);

  return { props: { genres, locale } };
}

export default Home;
