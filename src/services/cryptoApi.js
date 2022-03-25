import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "7a983413a5msh0b06738bd544683p12e602jsn6943c4acab68",
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptopApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query : () => createRequest('/exchanges')
        })
    })
})

// var options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/exchanges",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     limit: "50",
//     offset: "0",
//     orderBy: "24hVolume",
//     orderDirection: "desc",
//   },
//   headers: {
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//     "X-RapidAPI-Key": "7a983413a5msh0b06738bd544683p12e602jsn6943c4acab68",
//   },
// };
