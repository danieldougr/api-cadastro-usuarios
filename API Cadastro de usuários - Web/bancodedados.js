/*
Banco de dados da API
by: Daniel Douglas | BSI 2020
*/

const sequence = {
    _id: 0,
    get id(){
        return this._id++
    }
}

const users = {}

//function para criar o usuário
function createUser(user) {
    user.id = sequence.id
    users[user.id] = user
    return user
}

//function para listar o usuário
function listUsers() {
    return Object.values(users)
}

//function para buscar o usuário
function getUser(id){

    if(id < 0) {
        return console.log('User not found.')
    }

    return users[id]
}

//function para editar o usuário
function editUser(id, edit){
    if(id < 0) {
        return console.log('User not found.')

    } else if (edit.nome.length != undefined) {
        users[id].nome = edit.nome

    } else if (edit.email.length != undefined) {
        users[id].email = edit.email

    } else if (edit.endereco.length != undefined) {
        users[id].endereco = edit.endereco
    }   
    
    return Object.values(users[id]) 
}

//function para deletar o usuário
function deleteUser(id) {
    if(id < 0) {
        return console.log('User not found.')
    } else {
        users[id].nome = ""
        users[id].email = ""
        users[id].endereco = ""
    }

    return Object.values(users[id]) 

}

module.exports = {createUser, listUsers, getUser, editUser, deleteUser}