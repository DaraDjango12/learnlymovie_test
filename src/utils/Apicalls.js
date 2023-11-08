import axios from "axios";

export const MovieApi = () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://pixabay.com/api/?key=40548619-4029d7498e20dbd19888a8877`,
    headers: {
      "Content-Type": "application/json",

    //   'key':'40548619-4029d7498e20dbd19888a8877'

    //   "X-RapidAPI-Key": "01be465d78msh0cac052e8b41e98p18335djsn142d1b5c17c9",
    //   "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    },
  };

  return axios
    .request(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      if (error.response.data.error) {
        throw new Error(error.response.data.error);
      }
    });
};

//  require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://movie-database-alternative.p.rapidapi.com/',
//   params: {
//     s: 'Avengers Endgame',
//     r: 'json',
//     page: '1'
//   },
//   headers: {
//     'X-RapidAPI-Key': '01be465d78msh0cac052e8b41e98p18335djsn142d1b5c17c9',
//     'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log( 'data',response.data);
// } catch (error) {
// 	console.error(error);
// }
