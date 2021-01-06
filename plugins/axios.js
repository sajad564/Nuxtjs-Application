import https from 'https'

export default function({$axios , redirect}) {
    $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
    $axios.onRequest(config => {
        
        if(process.browser) {
            console.log('axios.js')
            config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
        
        }
  })
        
   
    $axios.onError(err => {
        if(err.response.status==401) 
            if(process.browser) {
                localStorage.removeItem('access_token')
                 redirect('/login')
            }
            
        })
}