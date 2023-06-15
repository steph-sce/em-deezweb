import axios from "axios";

const request = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  timeout: 10000,
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": '097e51663bmsh081067573a34dcfp17c3d0jsn9ab3450c5bc2'
  }
});

export async function getSearch(searchDeezer, order){
  try {
    const res = await request(`search?q=${searchDeezer}&order=${order}`);
    const { data: search } = res.data;
    return search;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

export async function getArtist(artistId){
  try {
    const res = await request(`artist/${artistId}`);
    const { data: artist } = res;
    return artist;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

export async function getAlbum(albumId){
  try {
    const res = await request(`album/${albumId}`);
    const { data: album } = res;
    return album;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

export async function getTrack(trackId){
  try {
    const res = await request(`track/${trackId}`);
    const { data: track } = res;
    return track;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}