export default class MainApi {
    constructor({ url, headers}) {
      this._url = url;
      this._headers = headers;
    }
  
    _isResponse(res) {
      if (res.ok) {
        return res.json();
      }
  
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getProfileInfo() {
      return fetch(`${this._url}/users/me`, { headers: this._headers })
        .then(res => this._isResponse(res))
    }
  
    patchProfileInfo({ name, email }) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name,
          email
        })
      })
      .then(res => this._isResponse(res))
    }
  
    getMovies() {
      return fetch(`${this._url}/movies`, { headers: this._headers })
        .then(res => this._isResponse(res))
    }
  
    createMovie({ country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId }) {
      return fetch(`${this._url}/movies`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          country, 
          director, 
          duration, 
          year, 
          description, 
          image, 
          trailer, 
          nameRU, 
          nameEN,
          thumbnail, 
          movieId
        })
      })
      .then(res => this._isResponse(res))
    }
  
    deleteMovie({ movieId }) {
      return fetch(`${this._url}/movies/${movieId}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(res => this._isResponse(res))
    }
  }