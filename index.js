import express from 'express';
//const express=require('express');
import morgan from 'morgan';
//const morgan=require('morgan');
import cors from 'cors';
//const cors=require('cors');
import path from 'path';

const app=express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
//Para habiltar al backend las peticiones dle json con el método POST
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join (__dirname,'public')));

app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
console.log('server on port' +app.get('port'));
//console.log(path.join (__dirname,'public'));

});

//Se han configurado los archivos estáticos (video 9)