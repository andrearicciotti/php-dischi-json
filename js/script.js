const { createApp } = Vue;

createApp({
    data() {
        return {
            discList: [],
            apiUrl: 'server.php',
        }
    },

    created() {
        axios.get(this.apiUrl).then((resp) => {
            this.discList = resp.data;
            console.log(resp.data);
        })
    },

    methods: {
        
    },
}).mount('#app');