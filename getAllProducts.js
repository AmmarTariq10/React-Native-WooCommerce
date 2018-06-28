import Constants from './Config'
import React, {Component} from 'react'
    
    export default getProductsNewest = (config,success,error) => {
        console.log('getting products')
        let url = Constants.URL.root+'wc-api/v3/products/?consumer_key='+Constants.Keys.ConsumerKey+'&consumer_secret='+Constants.Keys.ConsumerSecret+'&oauth_signature=undefined'
        let h = {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache"
        }
        let d = {
            per_page: config.productsPerPage,
            page: config.page
        }
        let data = JSON.stringify(d)
        let headers = new Headers(h)
        fetch(url, {
                method: 'GET',
                headers: headers,
                data: data
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