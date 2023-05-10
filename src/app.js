const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const { db } = require("../db/connection")

app.set("json spaces", 2);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.set("json spaces", 2);

// TODO: Create your GET Request Route Below: 
app.get("/musicians", async (req,res) =>{
    try{
const data = await Musician.findAll();
res.json(data)
    } catch (error) {
        console.error(error);
      }
})

// app.get("/musicians/1", async (req,res) =>{
//     try{
// const data = await Musician.findAll();
// res.json(data[0])
//     } catch (error) {
//         console.error(error);
//       }
// })

app.get("/bands", async (req,res) =>{
    try{
const data = await Band.findAll();
res.json(data)
    } catch (error) {
        console.error(error);
      }
})


// klkkol
//TODO: Create your GET Request Route Below: 
// app.get("/musicians", async (req,res) =>{
//     try{
// const data = await Musician.findAll();
// res.json(data)
//     } catch (error) {
//         console.error(error);
//       }
// })

app.get("/musicians/:id", async (req,res) => {
    const id = req.params.id;
    const musicians = await Musician.findByPk(id);
res.json(musicians);
})


app.post("/musicians", async (req,res) => {
    const musicians = await Musician.create(req.body);
res.json(musicians);
})

app.put("/musicians/:id", async (req,res) => {
    const UpdatedMusicians = await Musician.update(req.body, {where: {id: req.params.id}});
res.json(UpdatedMusicians);
})

app.delete("/musicians/:id", async (req,res) => {
    const deletedMusic = await Musician.destroy({where: {id: req.params.id}});
res.json(deletedMusic);
})






module.exports = app;