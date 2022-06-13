const searchStates = (searchText, books) => {

  let result = books.filter((state) => {
    const regex = new RegExp(`^${searchText}`, "gim");
    return state.title.match(regex) || state.author.match(regex) || state.year.match(regex);
  });

  if (searchText.length === 0) {
    result = [];
  } else if (result.length === 0) {
    result = [];
  }

  return result
};

export default searchStates;
