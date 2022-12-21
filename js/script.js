const { createApp } = Vue;

createApp({
    data() {
        return {
            mail:null,
        }
    },
    methods: {
        loadMail(){
            //get api
            //nel caso non usi un arrow function => const send = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response)=>{
                    //if successful
                    this.mail = response.data.response;
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
        this.loadMail();
    },
    

}).mount('#app');