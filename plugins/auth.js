export default function({route , app}) {
    if(process.browser && (route.name=='login' || route.name=='register') && localStorage.getItem('access_token')) {
       console.log('this is works fine :)')
       window.onNuxtReady(() => { window.$nuxt.$router.push('/profile') })
    }
}