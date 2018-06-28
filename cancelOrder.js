import Constants from './Config'
import React, {Component} from 'react'

export default cancelOrder = (order_id,success,error) => {

    //order_id: id of the order to be cancelled    
    //success: success callback function
    // error: error callback function

    console.log('cancelling order')
    let url = Constants.URL.root+'wc-api/v3/orders/'+order_id+'/?consumer_key='+Constants.Keys.ConsumerKey+'&consumer_secret='+Constants.Keys.ConsumerSecret+'&oauth_signature=undefined'
    let h = {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
    }
    let headers = new Headers(h)
    let d = {
        'order': {
            'status': 'cancelled'
        }
    }
    let data = JSON.stringify(d)
    fetch(url, {
            method: 'POST',
            headers: headers,
            body: data
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
            }
        ).catch(
            e=>{
                error(e)
            }
        )
}