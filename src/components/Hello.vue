<!-- src/components/Hello.vue -->
<template>
    <div>
        <div class="greeting">Hello{{enthusiasm}} </div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script >
import Vue from "vue";
export default {
    props: ['name1', 'initialEnthusiasm'],
    data() {
        return {
            enthusiasm: this.initialEnthusiasm,
        }
    },
    methods: {
        increment() { this.enthusiasm++; },
        decrement() {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        },
    },
   
};
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
