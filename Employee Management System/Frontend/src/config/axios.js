import axios from 'axios'
// baseURL:"https://694c4104da5ddabf00366f81.mockapi.io/",
const api=axios.create({
  baseURL:"http://localhost:3000/",
  timeout:5000,
  headers:{
    'Context-Type':'applicaiton/json',
  }, 
})

export default api;