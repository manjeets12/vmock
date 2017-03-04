'use strict';

import React, {Component} from 'react';

export const BASE_URL ='https://api.github.com'; 

var api = {

    //common method to get/post data from/to the server
    request: async function(params) {
        if (params) {
            let contentType ="application/json; charset=utf-8";
            let url = BASE_URL + params.method;
            let options ={
                  method: params.type,
                  dataType: 'json',
                  headers: {
                   'Accept': 'application/vnd.github.v3+json'
                   'Content-Type': contentType,
                  },
            };
            if(params.input){
              options.body = JSON.stringify(params.input);
            }
            console.log(params);
            try{
                let response = await fetch(url, options);
                let body = await response.json();
                console.log(body);
                return params.onSuccess(body);
            }catch(error){
                return params.onError(error);
            }
        }
    },
}

module.exports = api;



