import axios from "axios";

const API_KEY = "YOUR_API_KEY";
const MAX_RESULTS = 40;

export const searchBooks = (query: string, category: string, sort: string): Promise<any[]> => {
  let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&maxResults=${MAX_RESULTS}`;
  if (category !== "all") {
    url += `&subject:${category}`;
  }
  if (sort === "newest") {
    url += `&orderBy=newest`;
  }
  return axios
    .get(url)
    .then((response) => {
      const books = response.data.items.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : "Unknown",
        category: item.volumeInfo.categories ? item.volumeInfo.categories[0] : "Unknown",
        thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "",
      }));
      return books;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};