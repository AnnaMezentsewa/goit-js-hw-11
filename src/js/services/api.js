import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const KEY = '24849826-ed0b34a1916fe952aafa203b4';

export async function fetchImages(query, page, pageSize) {
  const response = await axios.get(
    `${BASE_URL}/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${pageSize}`,
  );
  return response;
}