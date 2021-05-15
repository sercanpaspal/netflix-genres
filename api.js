const tags = require("./tags.json").map((tag) => ({
  name: tag,
  disabled: false,
}));

export const tagsFilterByGenres = (genres) =>
  tags.map((tag) => {
    for (let i = 0; i < genres.length; i++) {
      if (genres[i].name.toLowerCase().includes(tag.name.toLowerCase())) {
        return { ...tag, disabled: false };
      }
    }

    return { ...tag, disabled: true };
  });

export const genresFilterBySelectedTags = (genres, selectedTags) =>
  genres.filter((genre) => {
    for (let i = 0; i < selectedTags.length; i++) {
      if (!genre.name.toLowerCase().includes(selectedTags[i].toLowerCase())) {
        return false;
      }
    }

    return true;
  });
