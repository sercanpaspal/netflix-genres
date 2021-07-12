const tags = {
  tr: require("./locales/tr/tags.json"),
  en: require("./locales/en/tags.json"),
};

export const filterTagsByGenresAndLocale = (genres, locale) => {
  return tags[locale]
    .map((tag) => ({
      name: tag,
      disabled: false,
    }))
    .map((tag) => {
      for (let i = 0; i < genres.length; i++) {
        if (genres[i].name.toLowerCase().includes(tag.name.toLowerCase())) {
          return { ...tag, disabled: false };
        }
      }

      return { ...tag, disabled: true };
    });
};

export const filterGenresBySelectedTags = (genres, selectedTags) =>
  genres.filter((genre) => {
    for (let i = 0; i < selectedTags.length; i++) {
      if (!genre.name.toLowerCase().includes(selectedTags[i].toLowerCase())) {
        return false;
      }
    }

    return true;
  });

export const getGenresByLocale = async (locale) => {
  switch (locale) {
    case "tr":
      return await fetch(
        "https://raw.githubusercontent.com/f/netflix-data/main/genres.tr.json"
      ).then((res) => res.json());
    case "en":
      const genres = await fetch(
        "https://raw.githubusercontent.com/eliask/netflix-genres/master/genres.json"
      ).then((res) => res.json());

      return Object.entries(genres).map((genre) => ({
        name: genre[1],
        url: "https://netflix.com/browse/genre/" + genre[0],
      }));
    default:
      return [];
  }
};
