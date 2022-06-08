// const express = require("express");
// const { Pool } = require('./db');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Testing')
// });

// //users route

// app.post('/users', (req, res) => {
//     const name = req.body.name
//     const user =  pool.query("INSERT INTO user(name) VALUES ($1)",
//     [name]);
// 	const resp = user.rows;
// });

// app.get('/users', (req, res) => {
//     const user =  pool.query("SELECT * FROM user");
// 	const resp = user.rows;
// });

// app.get('/users/:id', (req, res) => {
//     const id = req.params.id
//     const user =  pool.query("SELECT * FROM user WHERE id=$1", 
//     [id]);
// 	const resp = user.rows;
// });

// app.put('/users/:id', (req, res) => {
    
// });

// app.delete('/users/:id', (req, res) => {
//     const id = req.params.id
//     const user =  pool.query("DELETE FROM user WHERE id=$1", 
//     [id]);
// 	const resp = user.rows;
// });


// //user_requests route

// app.post('/user_requests', (req, res) => {
    
// });

// app.get('/user_requests/:id', (req, res) => {
    
// });

// app.delete('/user_requests/:id', (req, res) => {
    
// });

// //user_friends route

// app.post('/user_friends', (req, res) => {
    
// });

// app.get('/user_friends', (req, res) => {
    
// });

// app.delete('/user_friends', (req, res) => {
    
// });

// app.listen(3000, () => console.log("Listening to port 3000... "))