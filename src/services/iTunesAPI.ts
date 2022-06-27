import { ItunesTypes } from "../types/Itunes";

//const cors1 = 'https://cors-anywhere.herokuapp.com/'

export const itunesSearch = async (search: string): Promise<ItunesTypes> =>
  await fetch(`https://itunes.apple.com/search?term=${search}&entity=album`, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }})
    .then((val) => val.json())
    .catch((err) => {
      console.log(err);
    });
