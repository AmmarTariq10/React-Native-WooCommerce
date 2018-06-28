import Constants from './Config'
import React, {Component} from 'react'
export default createUser = (parameter, success, error) => {

    //parameter is of type object
    //success: success callback function
    // error: error callback function

    console.log('Creating user...')
    console.log('function parameter', parameter)
    let url = Constants.URL.root + 'wc-api/v3/customers/?consumer_key=' + Constants.Keys.ConsumerKey + '&consumer_secret=' + Constants.Keys.ConsumerSecret + '&oauth_signature=undefined'
    let h = {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
    }
    let headers = new Headers(h)
    let data = JSON.stringify(parameter)
    let config = {
        method: 'POST',
        headers: headers,
        body: data
    }
    console.log('hitting url', url)
    console.log(h, headers)
        fetch(url,config)
        .then(
          d=>
          {
             d.json()
             .then(
                 data=>{
                     success(data)
                 }
             )
          }
        ).catch(
            e=>{
              error(e)
            }
        )
        
}
