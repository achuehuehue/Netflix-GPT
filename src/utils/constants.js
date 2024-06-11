export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_API_KEY,
    }
  };

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500/";
  export const OPEN_AI_API_KEY=process.env.REACT_APP_OPEN_AI_API_KEY;

  