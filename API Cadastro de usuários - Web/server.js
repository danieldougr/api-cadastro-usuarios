/*
API - Cadastro de usuários
by: Daniel Douglas | BSI 2020
*/

const port = 3000

const express = require('express')

const bd = require('./bancodedados')

const app = express()

app.use(express.json())

//request mensage informando servidor ao qual está conectado
app.listen(port, ()=> {
    console.log(`Servidor foi iniciado na porta ${port}`)
})

// request para listar os usuários
app.get('/users', (req, res, next)=>{
    res.send(bd.listUsers())
})


// request para obter um usuário
app.get('/users/:id', (req, res, next)=>{
    res.send(bd.getUser(req.params.id))
})


// request para cadastrar um usuário
app.post('/users', (req, res, next)=>{
    const user = {
        id: null,
        nome: req.body.nome,
        email: req.body.email,
        endereco: req.body.endereco
    }
    bd.createUser(user)
    res.send(user)
})

// request para editar um usuário (informar id no request url)
app.put('/users/:id',(req, res, next)=> {

    const edit = {
        nome: req.body.nome,
        email: req.body.email,
        endereco: req.body.endereco
    }

    res.send(bd.editUser(req.params.id, edit))
})

// request para remover um usuário (informar id no request url)
app.delete('/users/:id',(req, res, next)=> {
    
    res.send(bd.deleteUser(req.params.id))
})