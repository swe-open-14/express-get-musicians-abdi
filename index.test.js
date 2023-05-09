// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician,Band} = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    
 test("Testing Musician endpoint", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
    })  

    test("Testing Musician Response is an array", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians");
        expect(Array.isArray(response.body)).toBe(true);
    })  
    
})

describe('./musicians/1 endpoint', () => {
    // Write your tests here
    
 test("Testing Musician/1 endpoint", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians/1");
        expect(response.statusCode).toBe(200);
    })  

    
    test("Testing Musician/1 Response name propertie", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians/1");
        expect(response.body.name).toBe("Mick Jagger");
    })  

})

describe('./bands endpoint', () => {
    // Write your tests here
    
 test("Testing bands endpoint", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/bands");
        expect(response.statusCode).toBe(200);
    })  

    
    test("Testing bands Response is an array", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians");
        expect(Array.isArray(response.body)).toBe(true);
    })  

})