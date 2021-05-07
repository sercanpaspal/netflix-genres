const tags = require("./tags.json").map((tag) => ({
  name: tag,
  disabled: false,
}));

export const tagsFilterByGenres = (genres) =>
  tags.map((tag) => {
    for (let i = 0; i < genres.length; i++) {
      if (genres[i].name.includes(tag.name)) {
        return { ...tag, disabled: false };
      }
    }

    return { ...tag, disabled: true };
  });

export const genresFilterBySelectedTags = (genres, selectedTags) =>
  genres.filter((genre) => {
    for (let i = 0; i < selectedTags.length; i++) {
      if (!genre.name.includes(selectedTags[i])) {
        return false;
      }
    }

    return true;
  });
