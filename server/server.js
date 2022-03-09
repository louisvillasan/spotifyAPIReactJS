
const express = require('express');
require('dotenv').config();
const request = require('request'); // "Request" library
// const querystring = require('querystring');
const REACT_APP_SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const REACT_APP_SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
const REACT_APP_SPOTIFY_REDIRECT_CALLBACK = 'http://localhost:3000/'
const REACT_APP_SPOTIFY_URL = 'https://accounts.spotify.com/authorize'
const REACT_APP_RESPONSE_TYPE = 'token';

let app = express();


app.get('/callback', function(req, res) {
    let code = req.query.code || null;
    console.log("🚀 ~ file: server.js ~ line 39 ~ app.get ~ code", code)
      let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code: code,
          redirect_uri: REACT_APP_SPOTIFY_REDIRECT_CALLBACK,
          grant_type: 'authorization_code'
        },
        headers: {
          'Authorization': 'Basic ' + (Buffer.from(REACT_APP_SPOTIFY_CLIENT_ID + ':' + REACT_APP_SPOTIFY_CLIENT_SECRET).toString('base64')),
          'content-type': 'application/x-www-form-urlencoded'
        },
        json: true
    }

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            const access_token = body.access_token;
            const refresh_token = body.refresh_token;
            const expires_in = body.expires_in;
            console.log("🚀 ~ file: server.js ~ line 56 ~ request.post ~ body", body)
            
            // console.log("🚀 ~ file: server.js ~ line 56 ~ request.post ~ refresh_token", refresh_token)

            res.send({
                access_token: access_token,
                refresh_token: refresh_token,
                expires_in: expires_in
            })
        }else{
            // console.log(response);
            // console.log(response);
        }
    })
  });



  app.get('/refresh_token', function(req, res) {
    
    let refresh_token = req.query.refresh_token;
    console.log("🚀 ~ file: server.js ~ line 57 ~ app.get ~ refresh_token", refresh_token)
    let authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: { 'Authorization': 'Basic ' + (Buffer.from(REACT_APP_SPOTIFY_CLIENT_ID + ':' + REACT_APP_SPOTIFY_CLIENT_SECRET).toString('base64')) },
      form: {
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      },
      json: true
    };
  
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        let access_token = body.access_token;
        // console.log("🚀 ~ file: server.js ~ line 71 ~ request.post ~ body", body)
        res.send({
          'access_token': access_token
        });
      }
    });
  });


  app.get('/', (req,res)  =>{
      res.send({message: "Funciono"})
  })

  app.listen({port:3001})