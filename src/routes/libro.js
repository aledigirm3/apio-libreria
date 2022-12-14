const { buildRouter } = require('express-toolkit')
const LibroController = require('../controller/libroController.js')
let libroModel = require('../models/libroModel');
const router = buildRouter
    ({
        controller: LibroController,
        endpoints: {
            find: true,
            findById: true,
            create: true,
            updateById: true,
            updateByQuery: true,
            deleteById: true,
            deleteByQuery: true,
            count: false,
            patchById: true,
            replaceById: true
        }
    })


module.exports = router
/* let libroModel = require('../models/libroModel');
let express = require('express');
let router = express.Router();

 //new libro
router.post('/libro',(req,res) => {
    if(!req.body.titolo || !req.body.autore)
    return res.status(400).send("non è presente il corpo")
   
    let libro = new libroModel(req.body)
    libro.save().then(doc => { 
        if(!doc || doc.lenght === 0)
        return res.status(500).send(doc)
        res.status(201).send(doc)
    }).catch(err => {
        res.status(500).json(err)
    })
     
})

//tutti i libri
router.get('/libri', (req,res) => {
    libroModel.find(
    ).then(doc => {
        if(!doc)
        return res.status(200).send("non sono presenti libri")
        res.json(doc)
    }).catch(err => {
        res.status(500).send(err);
    })
})

//ricrca libri per query
router.get('/libro', (req,res) => {
    if(!req.query.titolo)
    return res.status(400).send("non è presente la query")
    
    libroModel.find({
        titolo: new RegExp(req.query.titolo, 'i')
    }).then(doc => {
        res.json(doc)
    }).catch(err => {
        res.status(500).send(err);
    })
})

//ricerca libri per parametro
 router.get('/libro/:id', (req,res) => {
    libroModel.findById(req.params.id)
    .then(doc => {
        if(!doc)
        return res.status(400).send("id libro inesistente");
        res.json(doc)
    })
    .catch(err => res.status(500).send("codifica id non valida"))
}) 

router.put('/libro/:id', (req,res) => {
    if(!req.body.titolo && !req.body.autore)
    return res.status(500).send("nessuna modifica eseguita... body vuoto");
   libroModel.findByIdAndUpdate(req.params.id, req.body)
    .then(doc => {
        if(!doc)
        return res.status(400).send("id libro inesistente");
        res.status(200).json(doc)
    })
    .catch(err => res.status(500).send("codifica id non valida"))
})
//rimuovi libro per id
router.delete('/libro/:id', (req,res) => {
    libroModel.findByIdAndDelete(req.params.id)
    .then(doc => {
        if(!doc)
        return res.status(400).send("id libro inesistente");
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).send("codifica id non valida")
    })
})

//rimuovi tutti i libri
router.delete('/libro', async (req,res) => {
    let libri = await libroModel.find()
    .then(doc =>{
        return doc.length})
    .catch(err => res.json(err))
    if(libri == 0)
    return res.status(400).send("la collezione è gia vuota"); 
    libroModel.deleteMany()
    .then(doc => {
        res.status(200).send("collezione eliminata")
    }).catch(err => res.status(500).json(err))
})

module.exports = router; */