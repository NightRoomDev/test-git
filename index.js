const API_URI = 'https://localhost:3000/api'

function get() {
    fetch.get(API_URI + "/get")
}

function getOne(id) {
    fetch.get(API_URI + `/get/${id}`)
}