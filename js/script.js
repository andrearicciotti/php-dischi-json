const { createApp } = Vue;

createApp({
    data() {
        return {
            discList: [],
            apiUrl: 'server.php',
            activeDisc: 0,
            clicked: false,
        }
    },

    created() {
        axios.get(this.apiUrl).then((resp) => {
            this.discList = resp.data;
            console.log(resp.data);
        })
    },

    methods: {
        handlePreview(index) {
            this.activeDisc = index;
            this.clicked = true;
        }
    },
}).mount('#app');