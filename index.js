class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }
  static titleize(string) {
    const capitalize = (str) => {
      if (
        !["an", "a", "but", "of", "and", "for", "at", "by", "from"].includes(
          str
        )
      ) {
        return Formatter.capitalize(string);
      }
      return string;
    };
    return string.split(" ").map(capitalize).join(" ");
  }
}
