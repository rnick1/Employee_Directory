const axios = require('axios')

function getUser() {
    return axios.get('https://randomuser.me/api/?results=5000')
}

export default getUser;