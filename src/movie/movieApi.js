const axios = require('axios')

import apiUrl from '../auth/apiConfig.js'

export const getMovies = () => {
  return fetch(apiUrl + '/movies', {
    method: 'GET'
  })
}

export const axiosGetMovies = () => {
  return axios.get(apiUrl + '/movies')
}

export const getMoviesAuthenticated = (user) => {
  return fetch(apiUrl + '/movies', {
    method: 'GET',
    headers: {
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const axiosGetMoviesAuthenticated = (user) => {
  return axios.get(apiUrl + '/movies', {
    headers: {
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const postMovie = (data, user) => {
  return fetch(apiUrl + '/movies', {
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie: { ...data } })
  })
}

export const axiosPostMovie = (data, user) => {
  return axios.post(apiUrl + '/movies', { movie: { ...data }}, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}


export const patchMovie = (data, user) => {
  const { id } = data
  delete data.id
  return fetch(apiUrl + '/movies/' + id, {
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie: { ...data } })
  })
}

export const axiosPatchMovie = (data, user) => {
  const { id } = data
  delete data.id
  return axios.patch(apiUrl + '/movies/' + id, { movie: { ...data }}, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}

export const axiosDeleteMovie = (data, user) => {
  const { id } = data
  delete data.id
  return axios.delete(apiUrl + '/movies/' + id, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}

