import Vue from 'vue'
import Home from "../views/Home.vue";
import App from "../App.vue"

const Bus = new Vue({
    components: {
        Home,
        App
    }
});



export default Bus;


