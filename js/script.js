const { createApp } = Vue;

createApp({
    data() {
        return {
            mails:[],
            nMail: 10,
            countMailLoaded:0
        }
    },
    methods: {
        loadMail(){
            //get api
            //nel caso non usi un arrow function => const send = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response)=>{
                    //if successful
                    this.mails.push(response.data.response);
                    console.log("mail, pushed",this.countMailLoaded);
                })
                .catch((error)=>{
                    //if errors occurs
                    console.warn(error);
                })
                .then(()=>{
                    //always after then or catch; written just to make pratice
                    console.log('mail loaded', this.countMailLoaded);
                    this.countMailLoaded ++;
                    if(this.countMailLoaded === 10){
                        console.log('all loaded');
                    }
                })
        }
    },
    created() {
        for(let i=0; i<this.nMail; i++){
            this.loadMail();
        }
        console.log("this log and the next are called after the for loop");
        console.log("axios (AJAX) it's asynchronous, so the data it's not loaded yet");
    }
    
}).mount('#app');