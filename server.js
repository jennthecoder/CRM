const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')
const path = require('path');

const url = process.env.DATABASE_URL;
const token = process.env.ASTRA_TOKEN;
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'build')));
}

app.get('/tickets', async(req, res) => {
    const options = {
        method:'GET',
        headers: {
            Accepts:'application/json',
            'X-Cassandra-Token': token,
        }
    }
    try{
        const response = await axios(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    }catch(err){
        console.log(err)
        res.status(500).json({message: err})
    }
})

app.get('/tickets/:documentId', async(req, res) => {
    const id = req.params.documentId
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
        },
    }
    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    }catch(err){
        console.log(err)
        res.status(500).json({message: err})
    }
})

app.get('*', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, 'build', 'index.html'));
})



app.post('/tickets', async(req, res) =>{
    const formData = req.body.formData
    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData
    }
    try{
        const response = await axios(`${url}`, options)
        res.status(200).json(response.data);
    }catch (err) {
        res.status(500).json({message: err})
    }
})

app.put('/tickets/:documentId', async(req, res) => {
    const data = req.body.data
    const id = req.params.documentId
    const options = {
        method: 'PUT',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: data
    }
    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    }catch(err){
        console.log(err)
        res.status(500).json({message: err})
    }
})

app.delete('/tickets/:documentId', async(req, res) => {
    const id = req.params.documentId
    const options = {
        method: 'DELETE',
        headers: {
            Accepts:'application/json',
            'X-Cassandra-Token': token,
        }
    }
    try{
       const response = await axios(`${url}/${id}`, options)
       res.status(200).json(response.data)

    }catch(err) {
        console.log(err)
        res.status(500).json({message: err})
    }
})




app.listen(port, () => console.log('server running on PORT ' + port))
