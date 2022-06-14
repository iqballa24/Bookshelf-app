const searchStates = (searchText, books, categhoryValue, statusValue) => {
  statusValue =
    statusValue == "all" ? "all" : statusValue == "read" ? true : false;

  let result = books.filter((state) => {
    const regex = new RegExp(`^${searchText}`, "gim");
    return (
      state.title.match(regex) ||
      state.author.match(regex) ||
      state.year.toString().match(regex)
    );
  });

  if (categhoryValue != "all") {
    result = result.filter((state) => {
      return state.categhory == categhoryValue;
    });
  }

  if (statusValue != "all") {
    result = result.filter((state) => {
      return state.isComplete == statusValue;
    });
  }

  if (statusValue != "all" && categhoryValue != "all") {
    result = result.filter((state) => {
      return (
        state.categhory == categhoryValue || state.isComplete == statusValue
      );
    });
  }

  return result;
};

export default searchStates;
