// import express 
const express = require('express');

//importing routers
const userRouter = require('./routers/userRouter');
const utilRouter = require('./routers/util');
const subscriberRouter = require ('./routers/subscribeRouter');
const cors = require('cors');



//initaialize expresss app
const app = express();
const port = 5000;

//middleware

app.use(express.json());

app.use(cors());

app.use('/user', userRouter);

app.use('/util',utilRouter);

app.use('/subscriber',subscriberRouter);

app.use(express.static('./static/res/'));

//routes


app.get('/',(request,response)=> {
    response.send('Response from express');
});
//add
app.get('/add',(request,response)=> {
    response.send('Response add from express');
});
//getall
app.get('/getall',(request,response)=> {
    response.send('Response get all from express');
});
//delete
app.get('/delete',(request,response)=> {
    response.send('Response delete from express');
});
app.listen (port, () => { console.log('server started')});