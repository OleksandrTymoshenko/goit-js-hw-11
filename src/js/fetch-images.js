import axios from 'axios'

export {fetchImagens}

const KEY = '25186497-f0b65966427832fd654bcbd8e'
const URL = "https://pixabay.com/api"

async function fetchImagens(name, page){
    const response = await 
    axios.get(`${URL}/?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`)
    .then(resp => resp.data)
    .catch(error =>
        console.log(error)
      )
  return response
}
