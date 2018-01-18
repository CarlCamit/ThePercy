import api from './init'

export const getPastMushers = () => {
  return api.get('./past').then((res) => {
    return res.data
  })
}

export const getPastMusherByID = (id) => {
  return api.get(`./past?id=${id}`).then((res) => {
    return res.data
  })
}