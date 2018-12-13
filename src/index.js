import Vue from "vue";
import helloComponent from "./components/Hello.vue";
let v = new Vue({
    el: "#app",
});
window.helloComponent=helloComponent;
