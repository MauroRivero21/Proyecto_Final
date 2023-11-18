import axios from "axios"


const BASE_URL = "http://localhost:8080/users";

function getUsuarios(){
    return axios.get(BASE_URL)
};


function eliminarPorId(id){
    return axios.delete(`${BASE_URL}/${id}`);
}


function crearUsuario(user){
    return axios.post(BASE_URL, user);
}

function actualizarUsuario(usuario){
    return axios.put(`${BASE_URL}/${usuario.id}` , usuario)
}


export {getUsuarios, eliminarPorId,crearUsuario, actualizarUsuario};