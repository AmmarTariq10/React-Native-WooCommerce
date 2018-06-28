import Constants from './Config'
    

    export default getShippingZones = (data,success,error) => {
        console.log('getting shipping zones')
        let url = Constants.URL.root + "smacksandsmooche/wc-api/v2/shipping/zones/?&consumer_key="+Constants.Keys.ConsumerKey+"&consumer_secret="+Constants.Keys.ConsumerSecret+"&oauth_signature=undefined"
        let h = {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache"
        }
        let headers = new Headers(h)
        fetch(url, {
                method: 'GET',
                headers: headers,
                body:JSON.stringify(data)
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
