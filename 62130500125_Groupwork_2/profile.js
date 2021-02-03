const app ={
    data(){
        return{
            fName:'Nattawat',
            lName:'Wangsupadilok',
            imgURL:'./images/3.png',
            address:'BANGKOK',
            link:'http://www.google.com',
            bgURL:'https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_toystory_16x9_8461039f.jpeg'
           }
    }
}

var mountedApp = Vue.createApp(app).mount('#app')