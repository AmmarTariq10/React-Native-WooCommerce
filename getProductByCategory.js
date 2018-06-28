import Constants from './Config'
import React, {Component} from 'react'

export default getProductByCategories = (config,success,error) => {
    console.log('getting product by categories')
    let url = Constants.URL.root+'wc-api/v2/products/?page='+config.page+'&filter[category]='+config.category+'&consumer_key='+Constants.Keys.ConsumerKey+'&consumer_secret='+Constants.Keys.ConsumerSecret+'&oauth_signature=undefined'
    let h = {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
    }
    let headers = new Headers(h)
    fetch(url, {
            method: 'GET',
            headers: headers
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