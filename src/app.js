const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const { db } = require("../db/connection")

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

app.get("/musicians/1", async (req,res) =>{
    try{
const data = await Musician.findAll();
res.json(data[0])
    } catch (error) {
        console.error(error);
      }
})

app.get("/bands", async (req,res) =>{
    try{
const data = await Band.findAll();
res.json(data)
    } catch (error) {
        console.error(error);
      }
})







module.exports = app;