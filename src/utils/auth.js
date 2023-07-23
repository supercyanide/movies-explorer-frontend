const BASE_URL = 'https://movies-api-js2p.onrender.com';
// const BASE_URL = 'http://localhost:3000';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function request(endpoint, options) {
  console.log(endpoint, options)
  return fetch(`${BASE_URL}/${endpoint}`, options).then(checkResponse)
}

export const signup = ({ name, password, email }) => {
  return request(`signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, password, email })
  })
};

export const signin = ({email, password}) => {
  return request(`signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then((data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    return data
    
  });
};

export const checkToken = (token) => {
  return request(`users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
};