import {getRndInteger} from "./utility.js";
// import getRndInteger from "./utility.js";

const { createApp } = Vue

const app =createApp({
    data(){
        return{
            message:'Hello Word',
            image: 'https://www.dequo.it/articoli/app/uploads/2023/05/copyright-immagini-generate-ai12.jpg'
        }
    }
}).mount('#app');