import Constants from './Config'
import React, {Component} from 'react'

export default updateUser = (id,d,success,error) => {
    
    //id customer id that is to be updated
    //d is of type object
    //success: success callback function
    // error: error callback function

    console.log('update user info user')
    let url = Constants.URL.root + 'wc-api/v3/customers/'+id+'/?consumer_key='+Constants.Keys.ConsumerKey+'&consumer_secret='+Constants.Keys.ConsumerSecret+'&oauth_signature=undefined'
    let h = {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
    }
    let headers = new Headers(h)
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