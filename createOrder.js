import Constants from './Config'
import React, {Component} from 'react'

export default createOrder = (data,success,error) => {
     //data is of type object don't forget to add customer_id key
    //success: success callback function
    // error: error callback function
    console.log('creating order...')
    let url = Constants.URL.root + 'wc-api/v3/orders/?consumer_key='+Constants.Keys.ConsumerKey+'&consumer_secret='+Constants.Keys.ConsumerSecret+'&oauth_signature=undefined'

    let h = {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
    }

    let headers = new Headers(h)

    let d = {
       order: data
    }

    let da = JSON.stringify(d)
    fetch(url, {
            method: 'POST',
            headers: headers,
            body: da
        })
        .then(
            d => {
                d.json()
                    .then(
                        data => {
                           success(data)
                        }
                    ).catch(
                        e=>{
                            error(e)
                        }
                    )

            }).catch(
            e=>{
                error(e)
            }
        )
}