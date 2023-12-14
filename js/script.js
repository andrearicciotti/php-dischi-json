const { createApp } = Vue;

createApp({
    data() {
        return {
            filmList: [],
            apiUrl: 'server.php',
        }
    },

    created() {
        axios.get(this.apiUrl).then((resp) => {
            this.filmList = resp.data;
            console.log(this.filmList);
        })
    },

    methods: {
        
    },
}).mount('#app');