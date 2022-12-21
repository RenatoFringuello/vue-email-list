const { createApp } = Vue;

createApp({
    data() {
        return {
            mails:[],
            nMail: 10
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
                })
                .catch((error)=>{
                    //if errors occurs
                    console.warn(error);
                })
                .then(()=>{
                    //always
                })
        }
    },
    created() {
        for(let i=0; i<this.nMail; i++)
            this.loadMail();
    },
    

}).mount('#app');