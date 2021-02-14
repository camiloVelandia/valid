const API = `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=829751643419a7128b7ada50de590067&format=json`;
export default async function getGeoTopTracks() {
  let response = await fetch(API);
  let data = await response.json();
  return data;
}
