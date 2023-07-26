import axios from "axios";

const API_KEY = "AIzaSyCwZ4UAnXD_O0EM8U18GYk8M1hfKI8cy8Y";
const results = 'maxResults=40';

export const searchBooks = (query: string, category: string): Promise<any[]> => {
  const encodedCategory = encodeURIComponent(category);
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&${results}&printType=books&subject:${encodedCategory}`;
  
  return axios
    .get(url)
    .then((response) => {
      const books = response.data.items.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        description: item.volumeInfo.description,
        image: item.volumeInfo.imageLinks?.thumbnail,
        categories: item.volumeInfo.categories,
      }));
      return books;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};