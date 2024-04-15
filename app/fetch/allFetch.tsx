// import axios from "axios";


// export async function getCharacter (){
//   try{
//     const response = await axios.get(`https://rickandmortyapi.com/api/character`)
//     console.log(response, 'Это response getCharacter')
//     return response
//   }catch(e){
//     console.error(e)
//     return {
//       id:1,
//       name:"Evgenii",
//       species: "Humanoid",
//     }
//   }
// }

export function getCharacters(){
  return fetch(`https://rickandmortyapi.com/api/character`, {
    cache: "force-cache",
  }).then((res) => res.json());
}


export function getEpisodes() {
  return fetch(`https://rickandmortyapi.com/api/episode`,{
    cache: "force-cache",
  }).then((res) =>
    res.json()
  );
}


export function getLocations() {
  return fetch(`https://rickandmortyapi.com/api/location`, {
    cache: "force-cache",
  }).then((res) =>
    res.json()
  );
}

//  Запросы на динамические страницы

export function getCharacter(id: string){
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(res => res.json())
}