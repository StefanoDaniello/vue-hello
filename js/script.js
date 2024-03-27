import {getRndInteger} from "./utility.js";
// import getRndInteger from "./utility.js";

const { createApp } = Vue

const app =createApp({
    data(){
        return{
            message:'Hello Word',
            image: 'https://www.dequo.it/articoli/app/uploads/2023/05/copyright-immagini-generate-ai12.jpg',
            miaClasse:'red'
        }
    },
    methods:{
        toggleClass(){
            this.miaClasse= this.miaClasse === 'red' ? 'blue' :'red';
        },
        toggleImg(){
            this.image = this.image === 'https://www.dequo.it/articoli/app/uploads/2023/05/copyright-immagini-generate-ai12.jpg' ? 
            'https://www.ideabit.com/album/foto_full/formato-immagini-webp_710.jpg' : 'https://www.dequo.it/articoli/app/uploads/2023/05/copyright-immagini-generate-ai12.jpg';

          
        },
        otherImg(){
            this.image = this.image === 'https://www.dequo.it/articoli/app/uploads/2023/05/copyright-immagini-generate-ai12.jpg' ? 
            'https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-marquee-mobile-2x?$pjpeg$&jpegSize=100&wid=600' : 'https://www.dequo.it/articoli/app/uploads/2023/05/copyright-immagini-generate-ai12.jpg';
        }
    }
}).mount('#app');