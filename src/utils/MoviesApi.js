class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl
  };

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.statusText}`)
  };

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  };

  getMovies() {
    return this._request(`${this._baseUrl}`, {
      headers: {
        'Content-type': 'application/json',
      }
    })
  } 
  search(value) {
    return this._request(`${this._baseUrl}`+'?q='+value, {
    })
  } 
  
  getInfo(id) {
    return this._request(`${this._baseUrl}`+'?tt='+id, {
    })
  } 
}

// const moviesApi = new MoviesApi({
//   baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
// });
const moviesApi = new MoviesApi({
  baseUrl: 'https://search.imdbot.workers.dev',
});

export default moviesApi;