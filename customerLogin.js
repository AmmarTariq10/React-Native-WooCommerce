import Constants from './Config'
import React, {Component} from 'react'
    
    export default customerLogin = (userData,success,error) => {
        console.log('getting products')
        let url = Constants.URL.root+'api/auth/generate_auth_cookie/?insecure=cool&username='+userData.username+'&password='+userData.password
        fetch(url)
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