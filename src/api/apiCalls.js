import axios from "axios";

const request = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  timeout: 10000,
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": '097e51663bmsh081067573a34dcfp17c3d0jsn9ab3450c5bc2'
  }
});

const handleRequest = async (endpoint) => {
  try {
    const {data} = await request(endpoint);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
};

export const getSearch = async (searchDeezer, order) => {
  const endpoint = `search?q=${searchDeezer}&order=${order}`;
  return handleRequest(endpoint);
};

export const getArtist = async (artistId) => {
  const endpoint = `artist/${artistId}`;
  return handleRequest(endpoint);
};

export const getAlbum = async (albumId) => {
  const endpoint = `album/${albumId}`;
  return handleRequest(endpoint);
};

export const getTrack = async (trackId) => {
  const endpoint = `track/${trackId}`;
  return handleRequest(endpoint);
};
