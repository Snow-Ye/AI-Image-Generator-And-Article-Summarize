import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;


export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "38e0d4a681msh9f7c2f5b5bf76e9p1356dcjsnda4b15c25598"
      );
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const {useLazyGetSummaryQuery} = articleApi;