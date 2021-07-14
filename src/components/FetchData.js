import axios from 'axios';

export async function getAll() {
    return await axios.get("/")
}

export async function getById(id) {
    return await axios.get("/" + id);
}

export async function insertRow(body){
    // return axios.post("/" + id)
}

export async function deleteRowById(id) {
    return await axios.delete("/" + id)
}

export async function updateRow(id, body) {
    return await axios.put("/" + id, body)
}

